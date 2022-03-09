import * as http from 'http';
import { RouteResolver } from './../Resolver/RouteResolver';
import Action from '../Http/Action';
import NotFoundError from '../Error/NotFoundError';

export default class Route {
    private url: string;
    private req: http.IncomingMessage;
    private res: http.ServerResponse;
    private resolver: RouteResolver;

    constructor(req: http.IncomingMessage, res: http.ServerResponse, resolver: RouteResolver) {
        if (req.url === undefined) {
            throw new NotFoundError('Invalid Request');
        }
        this.url = req.url;
        this.req = req;
        this.res = res;
        this.resolver = resolver;
    }

    async exec(): Promise<TController|void> {

        const resolver = await this.resolver.resolve(this.url);
        const action = resolver.getAction();
        
        if (action === null) {
            throw new Error('Given Action is null')
        }

        const controller = await this.getControllerInstance(resolver.getControllerPath());
        
        return this.execController(action, controller);
    }

    async execController(action: Action, controller: TController): Promise<TController|void> {
        const method = action.getMethod();
        if (this.isMethodExist(controller, method)) {
            return controller[method]();
        }
    }

    // 型安全に書く方法がわからない..読み込むモジュールがany型になるのと、default exportかそうでないかの区別がつかない
    async getControllerInstance(path: string): Promise<TController> {
        try {
            const controller = await import(path);
            return new controller.default(this.req, this.res);
        } catch(e) {
            throw new NotFoundError('Could not load Controller');
        }
    }

    isMethodExist(controller: TController, method: string): method is (keyof typeof controller) {
        return typeof controller[method as keyof typeof controller] === 'function';
    }
}