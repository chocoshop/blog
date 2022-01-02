import * as http from 'http';

const port = 80;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.statusCode = 200;
    res.end('Hello World');
});

server.listen(port, () => {
    console.log('listen to port 80');
})