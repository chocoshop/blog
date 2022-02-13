import { RouteResolver } from './../../Resolver/RouteResolver';
import Controller from '../../Controllers';
import Action from '../../Http/Action';
import Route from '../../Route';
import TestController from './TestController';

describe('getControllerInstance', () => {
    test('Controllerのインスタンスを返す', async () => {
        const route = new Route('/test', new RouteResolver());
        expect(route.getControllerInstance('/var/www/modules/tests/Route/TestController')).resolves.toBeInstanceOf(Controller);
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

test('コントローラーのメソッドを実行する', () => {
    const route = new Route('/test', new RouteResolver());
    expect(route.execController(new Action('TestController@index'), new TestController())).resolves.toBeTruthy();
})

jest.mock('./../../Resolver/RouteResolver');
const mock = RouteResolver as jest.Mock;
test('アクションがnullの場合は、例外を投げる', async () => {
    mock.mockImplementationOnce(() => {
        return {
            resolve() {
                return {
                    getAction() {
                        return null;
                    }
                };
            }
        }
    })
    const route = new Route('', new RouteResolver());

    expect(() => route.exec()).rejects.toThrow(new Error('Given Action is null'));
})
