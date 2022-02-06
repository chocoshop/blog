import Action from "../Http/Action";
import load from "../Support/FileLoader";

export class RouteResolver {
    private routes: Routes = {};
    private action: Action|null = null;
    protected rootDir: string = require('app-root-path') + '/App/Http/';

    async resolve(path: string) {
        this.routes = await load<Routes>(this.rootDir);
        this.action = this.createAction(path, this.routes);
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

    isMethodExist() {

    }
}