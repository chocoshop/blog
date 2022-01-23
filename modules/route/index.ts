import * as http from "http";
const rootDir = require('app-root-path');

export default class Route {
    private req: http.IncomingMessage;
    private res: http.ServerResponse;
    private routes: {[key: string]: string};

    constructor(req: http.IncomingMessage, res: http.ServerResponse, routes: {}) {
        this.req = req;
        this.res = res;
        this.routes = routes;
    }

    async initilize(): Promise<{controller, method}> {
        for(const [route, action] of Object.entries(this.routes)) {
            if (route === this.req.url) {
                // todo: error handling
                const [controller, method, ...parameter] = action.split('@');
                // todo: ルートの場所を別クラスにしてデフォルト値を設定する
                const {default: Controller} = await import(`${rootDir.path}/App/Http/${controller}`);
                return {controller: new Controller(), method: method};
            }
        }
        console.log('Not Found');
        return;
    }
}