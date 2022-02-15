import NotFoundError from "../Error/NotFoundError";
import Action from "../Http/Action";
import load from "../Support/FileLoader";
const rootPath = require('app-root-path');

export class RouteResolver {
    private routes: Routes = {};
    private action: Action|null = null;
    protected routesFilePath: string = `${rootPath}/routes.ts`;
    protected controllerDir: string =`${rootPath}/App/Http`;

    async resolve(path: string) {
        this.routes = await load<Routes>(this.routesFilePath);
        this.action = this.createAction(path, this.routes);
        return this;
    }

    public createAction(path: string, routes: Routes): Action {
        for (const [route, action] of Object.entries(routes)) {
            if (path === route) {
                return new Action(action);
            }
        }
        throw new NotFoundError('Route Not Registered');
    }

    public getAction() {
        return this.action;
    }

    public getControllerPath(): string {
        return `${this.controllerDir}/${this.action?.getController()}`
    }
}