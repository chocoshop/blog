import { RouteResolver } from './../Resolver/RouteResolver';
import Controller from "../Controllers";
import Action from '../Http/Action';

export default class Route {
    private url: string;
    private resolver: RouteResolver;

    constructor(url: string) {
        this.url = url;
        this.resolver = new RouteResolver();
    }

    async exec() {
        const resolver = await this.resolver.resolve(this.url);
        const action = resolver.getAction();
        if (!action) {
            return;
        }

        return this.execController(action);
    }

    async execController(action: Action): Promise<Controller<Methods>|void> {
        const instance = await this.getControllerInstance(action.getController());
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
}