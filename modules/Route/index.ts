import Controller from "../Controllers";
import RouteProvider from "../Provider/RouteProvider";

export default class Route {
    private url: string;
    private provider: RouteProvider;

    constructor(url: string, provider: RouteProvider) {
        this.url = url;
        this.provider = provider;
    }

    async initilize(): Promise<{controller: Controller, method: string}> {
        for(const [route, action] of Object.entries(this.provider.routes)) {
            const [controller, method, ...parameter] = action.split('@');
            if (route != this.url) {
                continue;
            }
            const instance = await this.getControllerInstance(controller);
            if (!this.isMethodExist(instance, method)) {
                throw new Error('Method Not Found');
            }
            return {controller: instance, method: method};
        }
        throw new Error('Route Not Found');
    }

    async getControllerInstance(controller: string): Promise<Controller>{
        // 一度変数に入れないとアクセスできない..?
        const dir = this.provider.controller_dir;

        // todo: ルートの場所を別クラスにしてデフォルト値を設定する
        try {
            const {default: Controller} = await import(`${dir}/${controller}`);
            return new Controller();
        } catch (e) {
            throw new Error('Could Not Load Controller');
        }
    }

    isMethodExist(controller: Controller, method: string): boolean {
        if (typeof controller[method] === 'function') {
            return true;
        }
        return false;
    }
}