import * as http from 'http';

export default class Controller
{
    constructor() {
    }
    get(req: http.IncomingMessage, res: http.ServerResponse): http.ServerResponse {
        return res.end('/にきた');
    }

    getA(req: http.IncomingMessage, res: http.ServerResponse): http.ServerResponse {
        return res.end('/aにきた');
    }
}