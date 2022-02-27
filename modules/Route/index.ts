import { RouteResolver } from './../Resolver/RouteResolver';
import Action from '../Http/Action';

export default class Route {
    private url: string;
    private resolver: RouteResolver;

    constructor(url: string, resolver: RouteResolver) {
        this.url = url;
        this.resolver = resolver;
    }

    async exec(): Promise<TController<Methods>|void> {
        const resolver = await this.resolver.resolve(this.url);
        const action = resolver.getAction();
        
        if (action === null) {
            throw new Error('Given Action is null')
        }
        const controller = await this.getControllerInstance(resolver.getControllerPath());
        if (controller === null) {
            throw new Error('Could not load Controller');
        }
        
        return this.execController(action, controller);
    }

    async execController(action: Action, controller: TController<Methods>): Promise<TController<Methods>|void> {
        const method = action.getMethod();
        if (this.isMethodExist(controller, method)) {
            return controller[method]();
        }
    }

    // 型安全に書く方法がわからない..読み込むモジュールがany型になるのと、default exportかそうでないかの区別がつかない
    async getControllerInstance(path: string): Promise<TController<Methods>|null> {
        try {
            const controller = await import(path);
            return new controller.default();
        } catch(e) {
            return null;
        }
    }

    isMethodExist(controller: TController<Methods>, method: string): method is (keyof typeof controller) {
        return typeof controller[method as keyof typeof controller] === 'function';
    }
}