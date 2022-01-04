import * as http from "http";

export default class Route {
    static get (route: string, path: string, cloasure: () => http.ServerResponse) {
        if (route === path) {
            cloasure();
        }
        return;
    }
}