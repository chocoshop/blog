import Action from "../Http/Action";
import load from "../Support/FileLoader";
const rootPath = require('app-root-path');

export class RouteResolver {
    private routes: Routes = {};
    private action: Action|null = null;
    public routesFilePath: string = `${rootPath}/routes.ts`;
    public controllerDir: string =`${rootPath}/App/Http`;

    async resolve(path: string) {
        this.routes = await load<Routes>(this.routesFilePath);
        this.action = this.createAction(path, this.routes);
        return this;
    }

    createAction(path: string, routes: Routes): Action {
        for (const [route, action] of Object.entries(routes)) {
            if (path === route) {
                return new Action(action);
            }
        }
        throw new Error('Route Not Registered');
    }

    getRoutes() {
        return this.routes;
    }

    getAction() {
        return this.action;
    }

    public getControllerPath(): string|null {
        return `${this.controllerDir}/${this.action?.getController()}`
    }

    isMethodExist() {

    }
}