import Controller from '../../Controllers';
import RouteResolver from '../../../App/Resolver/RouteResolver';
import Route from '../../Route';
import Action from '../../Http/Action';
import TestController from './TestController';

describe('getControllerInstance', () => {
    test('Controllerのインスタンスを返す', async () => {
        const route = new Route('/test');
        expect(route.getControllerInstance('/var/www/modules/tests/Route/TestController')).resolves.toBeInstanceOf(Controller);
    });

    test('コントローラーのファイルをimportできない場合は、nullを返す', async () => {
        const route = new Route('/test');
        expect(route.getControllerInstance('/var/www/modules/tests/Route/DummyController')).resolves.toBe(null);
    });
})

test('存在するメソッドの場合はtrueを返す', () => {
    const route = new Route('/test');
    expect(route.isMethodExist(new TestController(), 'index')).toBe(true);
});



// test('実行されるメソッドが存在しない場合、例外を投げる', async () => {
//     const resolver = new RouteResolver({'/test': 'TestController@not_exist_method'});
//     resolver.controller_dir = '/var/www/modules/tests/Route';
//     const route = new Route('/test', resolver);
//     const action = route.initilize();
//     await expect(action).rejects.toThrow(new Error('Method Not Found'));
// })

// describe('isMethodExist__実行されるメソッドがコントローラーに存在するか確認する', () => {
//     test('メソッドが存在する場合は、trueを返す', () => {
//         const resolver = new RouteResolver({'/test': 'TestController@index'});
//         const route = new Route('/test', resolver);
//         expect(route.isMethodExist(new TestController(), 'index')).toBe(true);
//     })
    
//     test('存在しないメソッドの場合は、falseを返す', () => {
//         const resolver = new RouteResolver({'/test': 'TestController@not_exist_method'});
//         const route = new Route('/test', resolver);
//         expect(route.isMethodExist(new TestController(), 'not_exist_method')).toBe(false);
//     });
// });