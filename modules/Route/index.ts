const rootDir = require('app-root-path');

export default class Route {
    private url: string;
    private routes: {[key: string]: string};
    public controller_dir: string;

    constructor(url: string, routes: {[path: string]: string}) {
        this.url = url;
        this.routes = routes;
        this.controller_dir = `${rootDir.path}/App/Http`;
    }

    async initilize(): Promise<{controller: string, method: string}> {
        for(const [route, action] of Object.entries(this.routes)) {
            if (route === this.url) {
                // todo: error handling
                const [controller, method, ...parameter] = action.split('@');
                // todo: ルートの場所を別クラスにしてデフォルト値を設定する
                const {default: Controller} = await import(`${this.controller_dir}/${controller}`);
                return {controller: new Controller(), method: method};
            }
        }
        console.log('Not Found');
        return;
    }
}