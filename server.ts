import * as http from 'http';
import { RouteResolver } from './modules/Resolver/RouteResolver';
import Route from './modules/Route';

const port = 80;

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === undefined) {
        return;
    }
    const route =  new Route(req.url, new RouteResolver());
    const response = await route.exec();
    res.end(response);
});

server.listen(port, () => {
    console.log('listen to port 80');
})