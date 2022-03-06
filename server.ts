import * as http from 'http';
import Handler from './modules/Error/Handler';
import { RouteResolver } from './modules/Resolver/RouteResolver';
import Route from './modules/Route';

const port = 80;

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
        const route =  new Route(req, res, new RouteResolver());
        const response = await route.exec();
        return res.end(response);
    } catch (e) {
        (new Handler()).render(res, e);
    }
});

server.listen(port, () => {
    console.log('listen to port 80');
})