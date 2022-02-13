import Action from "../Http/Action";
import load from "../Support/FileLoader";

export class RouteResolver {
    private routes: Routes = {};
    private action: Action|null = null;
    public rootDir: string = require('app-root-path');

    async resolve(path: string) {
        this.routes = await load<Routes>(`${this.rootDir}/routes.ts`);
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
        return `${this.rootDir}/App/Http/${this.action?.getController()}`
    }

    isMethodExist() {

    }
}