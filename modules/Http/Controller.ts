import * as http from 'http';

export default class Controller implements TController {
    req: http.IncomingMessage;
    res: http.ServerResponse;

    constructor(req: http.IncomingMessage, res: http.ServerResponse) {
        this.req = req;
        this.res = res;
    }
}