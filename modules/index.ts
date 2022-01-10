import * as http from "http";

export default class Route {
    static get (route: string, path: string, callback: () => http.ServerResponse) {
        if (route === path) {
            callback();
        }
        return;
    }
}