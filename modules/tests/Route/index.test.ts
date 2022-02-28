import { RouteResolver } from './../../Resolver/RouteResolver';
import Action from '../../Http/Action';
import Route from '../../Route';
import TestController from './TestController';

describe('getControllerInstance', () => {
    test('Controllerのインスタンスを返す', async () => {
        const route = new Route('/test', new RouteResolver());
        expect(route.getControllerInstance('/var/www/modules/tests/Route/TestController')).resolves.toBeInstanceOf(TestController);
    });

    test('コントローラーのファイルをimportできない場合は、nullを返す', async () => {
        const route = new Route('/test', new RouteResolver());
        expect(route.getControllerInstance('/var/www/modules/tests/Route/DummyController')).resolves.toBe(null);
    });
});

describe('isMethodExist', () => {
    test('存在するメソッドの場合は、trueを返す', () => {
        const route = new Route('/test', new RouteResolver());
        expect(route.isMethodExist(new TestController(), 'index')).toBe(true);
    });
    
    test('存在しないメソッドの場合は、falseを返す', () => {
        const route = new Route('/test', new RouteResolver());
        expect(route.isMethodExist(new TestController(), 'notfound')).toBe(false);
    })
});

test('コントローラーのインスタンスがnullの場合は、例外を投げる', async () => {
    jest.spyOn(RouteResolver.prototype, 'resolve')
        .mockResolvedValue(new Promise(() => {
            return {
                getAction() {
                    return new Action('TestController@index');
                }
            }
        }));
    jest.spyOn(Route.prototype, 'getControllerInstance')
        .mockReturnValue(new Promise(() => null));
    
    const route = new Route('', new RouteResolver());
    expect(() => route.exec()).rejects.toThrow(new Error('Could not load Controller'));
});

test('アクションがnullの場合は、例外を投げる', async () => {
    jest.spyOn(RouteResolver.prototype, 'resolve')
        .mockResolvedValue(new Promise(() => {
            return {
                getAction() {
                    return null;
            }}
        }));
    const route = new Route('', new RouteResolver());
    expect(() => route.exec()).rejects.toThrow(new Error('Given Action is null'));
});