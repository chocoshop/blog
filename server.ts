import * as http from 'http';
import Route from './modules';

const port = 80;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const path = req.url;
    res.statusCode = 200;
    Route.get('/', path, () => res.end('/にきた'));
    Route.get('/a', path, () => res.end('aにきた'));
    Route.get('/b', path, () => res.end('bにきた'));
});

server.listen(port, () => {
    console.log('listen to port 80');
})