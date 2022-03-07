import * as http from 'http';
import NotFoundError from './NotFoundError';

export default class Handler {
    public render(res: http.ServerResponse, e: Error): void {
        switch(e.constructor) {
            case NotFoundError:
                res.statusCode = 404;
                res.write(e.message);
                break;
            default:
                res.statusCode = 500;
        }
        console.log(e.message);
        res.end();
    }
}