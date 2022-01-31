import Controller from '../../Controllers';
import RouteProvider from '../../Provider/RouteProvider';
import Route from '../../Route';
import TestController from './TestController';

test('一致したルーティングある場合は、Controllerのインスタンスを返す', async () => {
    const provider = new RouteProvider({'/test': 'TestController@index'});
    provider.controller_dir = '/var/www/modules/tests/Route';
    const route = new Route('/test', provider);
    const action = await route.initilize();
    expect(action.controller).toBeInstanceOf(Controller);
});

test('一致するルーティングがない場合は、例外を投げる', async () => {
    const provider = new RouteProvider({'/notfound': 'TestController@index'});
    provider.controller_dir = '/var/www/modules/tests/Route';
    const route = new Route('/test', provider);
    const action = route.initilize();
    await expect(action).rejects.toThrow(new Error('Route Not Found'));
});

test('存在しないコントローラーの場合は、例外を投げる', async () => {
    const provider = new RouteProvider({'/test': 'NotExistController@not_exist_method'});
    const route = new Route('/test', provider);
    const action = route.initilize();
    await expect(action).rejects.toThrow(new Error('Could Not Load Controller'));
});

test('実行されるメソッドが存在しない場合、例外を投げる', async () => {
    const provider = new RouteProvider({'/test': 'TestController@not_exist_method'});
    provider.controller_dir = '/var/www/modules/tests/Route';
    const route = new Route('/test', provider);
    const action = route.initilize();
    await expect(action).rejects.toThrow(new Error('Method Not Found'));
})

describe('isMethodExist__実行されるメソッドがコントローラーに存在するか確認する', () => {
    test('メソッドが存在する場合は、trueを返す', () => {
        const provider = new RouteProvider({'/test': 'TestController@index'});
        const route = new Route('/test', provider);
        expect(route.isMethodExist(new TestController(), 'index')).toBe(true);
    })
    
    test('存在しないメソッドの場合は、falseを返す', () => {
        const provider = new RouteProvider({'/test': 'TestController@not_exist_method'});
        const route = new Route('/test', provider);
        expect(route.isMethodExist(new TestController(), 'not_exist_method')).toBe(false);
    });
});