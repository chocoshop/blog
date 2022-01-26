import * as http from 'http';
import Route from './modules/Route';
import routes from './routes';

const port = 80;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const route =  new Route(req.url, routes);
    const action = route.initilize();
    action.then(({controller, method}) => {
        controller[method](req, res);
    });
});

server.listen(port, () => {
    console.log('listen to port 80');
})