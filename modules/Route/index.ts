import { RouteResolver } from './../Resolver/RouteResolver';
import Controller from "../Controllers";

export default class Route {
    private url: string;
    private resolver: RouteResolver;

    constructor(url: string) {
        this.url = url;
        this.resolver = new RouteResolver();
    }

    async initilize(): Promise<{controller: Controller, method: string}|void> {
        const resolver = await this.resolver.resolve(this.url);
        const action = resolver.getAction();
        if (!action) {
            return;
        }
        const instance = await this.getControllerInstance(action.getController());
        if (!instance) {
            return;
        }
        if (!this.isMethodExist(instance, action.getMethod())) {
            return;
        }
        return {controller: instance, method: action.getMethod()};
    }

    // 型安全に書く方法がわからない..読み込むむジュールがany型になるのと、default exportかそうでないかの区別がつかない
    async getControllerInstance(path: string): Promise<Controller> {
        const controller = await import(path);
        return new controller.default();
    }

    isMethodExist(controller: any, method: string): boolean {
        if (typeof controller[method] === 'function') {
            return true;
        }
        return false;
    }
}