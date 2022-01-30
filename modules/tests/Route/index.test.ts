import Controller from '../../Controllers';
import Route from '../../Route';

test('一致したルーティングある場合は、Controllerのインスタンスを返す', async () => {
    const route = new Route('/test', {'/test': 'TestController@index'});
    route.controller_dir = '/var/www/modules/tests/Route'
    const action = await route.initilize();
    expect(action.controller).toBeInstanceOf(Controller);
})

test('一致するルーティングがない場合は、例外を投げる', async () => {
    const route = new Route('/notfound', {'/test': 'TestController@index'});
    const action = route.initilize();
    await expect(action).rejects.toThrow(new Error('Route Not Found'));
});

test('存在しないコントローラーの場合は、例外を投げる', async () => {
    const route = new Route('/test', {'/test': 'NotExistController@index'});
    const action = route.initilize();
    await expect(action).rejects.toThrow(new Error('Could Not Load Controller'));
})