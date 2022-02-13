import { RouteResolver } from './../Resolver/RouteResolver';
import Controller from "../Controllers";
import Action from '../Http/Action';

export default class Route {
    private url: string;
    private resolver: RouteResolver;

    constructor(url: string, resolver: RouteResolver) {
        this.url = url;
        this.resolver = resolver;
    }

    async exec() {
        const resolver = await this.resolver.resolve(this.url);
        const action = resolver.getAction();
        
        if (action === null) {
            throw new Error('Given Action is null')
        }
        const controller = await this.getControllerInstance(`${resolver.rootDir}/App/Http/${action.getController()}`);
        if (controller === null) {
            throw new Error('Given Controller Instance is null');
        }
        
        return this.execController(action, controller);
    }

    async execController(action: Action, controller: Controller<Methods>): Promise<Controller<Methods>|void> {
        if (this.isMethodExist(controller, action.getMethod())) {
            return controller[action.getMethod() as keyof typeof controller]();
        }
    }

    // 型安全に書く方法がわからない..読み込むモジュールがany型になるのと、default exportかそうでないかの区別がつかない
    async getControllerInstance(path: string): Promise<Controller<Methods>|null> {
        try {
            const controller = await import(path);
            return new controller.default();
        } catch(e) {
            return null;
        }
    }

    isMethodExist(controller: Controller<Methods>, method: string): boolean {
        if (typeof controller[method as keyof typeof controller] === 'function') {
            return true;
        }
        return false;
    }
}