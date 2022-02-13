import * as http from 'http';

export default class Controller
{
    constructor() {
    }
    get(req: http.IncomingMessage, res: http.ServerResponse) {
        return '/にきた';
    }

    getA(req: http.IncomingMessage, res: http.ServerResponse) {
        return 'aにきた';
    }
}