const rootDir = require('app-root-path');

export default class RouteProvider {
    // todo: ファイルのロードを内部で行う。defalutはweb
    public routes: {[key: string]: string};
    public controller_dir: string;

    constructor(routes: {[path: string]: string}) {
        this.routes = routes;
        this.controller_dir = `${rootDir.path}/App/Http`;
    }
}