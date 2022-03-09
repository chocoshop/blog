import * as http from 'http';
import { RouteResolver } from './../../Resolver/RouteResolver';
import Route from '../../Route';
import TestController from './TestController';

describe('getControllerInstance', () => {
    test('Controllerのインスタンスを返す', async () => {
        const route = new Route({url: '/test'} as http.IncomingMessage, {} as http.ServerResponse, new RouteResolver());
        expect(route.getControllerInstance('/var/www/modules/tests/Route/TestController')).resolves.toBeInstanceOf(TestController);
    });

    test('コントローラーのファイルをimportできない場合は、例外を投げる', async () => {
        const route = new Route({url: '/test'} as http.IncomingMessage, {} as http.ServerResponse, new RouteResolver());
        expect(route.getControllerInstance('/var/www/modules/tests/Route/DummyController')).rejects.toThrow(new Error('Could not load Controller'));
    });
});

describe('isMethodExist', () => {
    test('存在するメソッドの場合は、trueを返す', () => {
        const route = new Route({url: '/test'} as http.IncomingMessage, {} as http.ServerResponse, new RouteResolver());
        expect(route.isMethodExist(new TestController({} as http.IncomingMessage, {} as http.ServerResponse), 'index')).toBe(true);
    });
    
    test('存在しないメソッドの場合は、falseを返す', () => {
        const route = new Route({url: '/test'} as http.IncomingMessage, {} as http.ServerResponse, new RouteResolver());
        expect(route.isMethodExist(new TestController({} as http.IncomingMessage, {} as http.ServerResponse), 'notfound')).toBe(false);
    })
});


test('アクションがnullの場合は、例外を投げる', async () => {
    jest.spyOn(RouteResolver.prototype, 'resolve')
        .mockResolvedValue(new Promise(() => {
            return {
                getAction() {
                    return null;
            }}
        }));
    const route = new Route({url: '/test'} as http.IncomingMessage, {} as http.ServerResponse, new RouteResolver());
    expect(() => route.exec()).rejects.toThrow(new Error('Given Action is null'));
});