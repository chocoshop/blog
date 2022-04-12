import { isAsset } from './modules/Route/static/utils/index';
import * as http from 'http';
import Handler from './modules/Error/Handler';
import { RouteResolver } from './modules/Resolver/RouteResolver';
import Route from './modules/Route';
import NotFoundError from './modules/Error/NotFoundError';
import StaticRoute from './modules/Route/static';

const port = process.env.PORT;

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
        if (!req.url) {
            throw new NotFoundError('Invalid Route');
        }

        if (isAsset(req.url)) {
            const file = await StaticRoute.exec(req.url);
            res.writeHead(200, {'Content-Type': `${file.contentType}; charset=utf-8`});
            res.end(file.content);
            return;
        };

        const route =  new Route(req, res, new RouteResolver());
        const view = await route.exec();
        res.end(view);
    } catch (e) {
        (new Handler()).render(res, e);
    }
});

server.listen(port, () => {
    console.log(`listen to port ${process.env.PORT}`);
})