import * as http from 'http';

export default class IndexController implements TController<IndexController>
{
    get(req: http.IncomingMessage, res: http.ServerResponse) {
        return '/にきた';
    }

    getA(req: http.IncomingMessage, res: http.ServerResponse) {
        return 'aにきた';
    }
}