import * as http from 'http';

export default class IndexController implements TController<{
    getA: (req: http.IncomingMessage, res: http.ServerResponse) => http.ServerResponse;
}>
{
    getA(req: http.IncomingMessage, res: http.ServerResponse): http.ServerResponse {
        return res.end('aにきた');
    }

}