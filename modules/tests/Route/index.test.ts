import Controller from '../../Controllers';
import Route from '../../Route';

test('一致したルーティングある場合は、Controllerのインスタンスを返す', async() => {
    const route = new Route('/test', {'/test': 'TestController@index'});
    route.controller_dir = '/var/www/modules/tests/Route'
    const action = await route.initilize();
    expect(action.controller).toBeInstanceOf(Controller);
})