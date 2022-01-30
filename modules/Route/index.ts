import Controller from "../Controllers";

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

    async initilize(): Promise<{controller: Controller, method: string}> {
        for(const [route, action] of Object.entries(this.routes)) {
            const [controller, method, ...parameter] = action.split('@');
            if (route === this.url) {
                const instance = await this.getControllerInstance(controller);
                return {controller: instance, method: method};
            }
        }
        throw new Error('Route Not Found');
    }

    async getControllerInstance(controller: string): Promise<Controller>{
        // 一度変数に入れないとアクセスできない..?
        const dir = this.controller_dir;

        // todo: ルートの場所を別クラスにしてデフォルト値を設定する
        const {default: Controller} = await import(`${dir}/${controller}`);
        return new Controller();
    }
}