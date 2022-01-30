import Controller from '../../Controllers';
import Route from '../../Route';
import TestController from './TestController';

test('一致したルーティングある場合は、Controllerのインスタンスを返す', async () => {
    const route = new Route('/test', {'/test': 'TestController@index'});
    route.controller_dir = '/var/www/modules/tests/Route';
    const action = await route.initilize();
    expect(action.controller).toBeInstanceOf(Controller);
})

test('一致するルーティングがない場合は、例外を投げる', async () => {
    const route = new Route('/notfound', {'/test': 'TestController@index'});
    const action = route.initilize();
    await expect(action).rejects.toThrow(new Error('Route Not Found'));
});

test('存在しないコントローラーの場合は、例外を投げる', async () => {
    const route = new Route('/test', {'/test': 'NotExistController@not_exist_method'});
    const action = route.initilize();
    await expect(action).rejects.toThrow(new Error('Could Not Load Controller'));
});

test('実行されるメソッドが存在しない場合、例外を投げる', async () => {
    const route = new Route('/test', {'/test': 'TestController@not_exist_method'});
    route.controller_dir = '/var/www/modules/tests/Route';
    const action = route.initilize();
    await expect(action).rejects.toThrow(new Error('Method Not Found'));
})

describe('isMethodExist__実行されるメソッドがコントローラーに存在するか確認する', () => {
    test('メソッドが存在する場合は、trueを返す', () => {
        const route = new Route('/test', {'/test': 'TestController@index'});
        expect(route.isMethodExist(new TestController(), 'index')).toBe(true);
    })
    
    test('存在しないメソッドの場合は、falseを返す', () => {
        const route = new Route('/test', {'/test': 'TestController@not_exist_method'});
        expect(route.isMethodExist(new TestController(), 'not_exist_method')).toBe(false);
    });
});