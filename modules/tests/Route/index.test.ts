import Controller from '../../Controllers';
import RouteResolver from '../../../App/Resolver/RouteResolver';
import Route from '../../Route';
// import '../../App/config/_config'

describe('getControllerInstance', () => {
    test('Controllerのインスタンスを返す', async () => {
        const route = new Route('/test');
        route.getControllerInstance('/var/www/modules/tests/Route/TestController')
        expect(route.getControllerInstance('/var/www/modules/tests/Route/TestController')).resolves.toBeInstanceOf(Controller);
    });
})

// test('一致するルーティングがない場合は、例外を投げる', async () => {
//     const resolver = new RouteResolver({'/notfound': 'TestController@index'});
//     resolver.controller_dir = '/var/www/modules/tests/Route';
//     const route = new Route('/test', resolver);
//     const action = route.initilize();
//     await expect(action).rejects.toThrow(new Error('Route Not Found'));
// });

// test('存在しないコントローラーの場合は、例外を投げる', async () => {
//     const resolver = new RouteResolver();
//     const route = new Route('/test', resolver);
//     const action = route.initilize();
//     await expect(action).rejects.toThrow(new Error('Could Not Load Controller'));
// });

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