import { RouteResolver } from './../Resolver/RouteResolver';
import Controller from "../Controllers";
import load from '../Support/FileLoader';

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
        if (!this.isMethodExist(instance, action.getMethod())) {
            return;
        }
        return {controller: instance, method: action.getMethod()};
    }

    async getControllerInstance(path: string): Promise<Controller> {
        try {
            // any書きたくない....todo: 別の設計か型推論が通るように変更する
            const controller = await load<{default: Controller}>(path) as any;
            return new controller.default() as Controller;
        } catch (e) {
            throw e;
        }
    }

    isMethodExist(controller: any, method: string): boolean {
        if (typeof controller[method] === 'function') {
            return true;
        }
        return false;
    }
}