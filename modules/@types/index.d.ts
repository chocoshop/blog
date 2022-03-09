type Routes = {
    [path: string]: string
}

interface TController {
    req: http.IncomingMessage;
    res: http.ServerResponse;
    invoke?;
}
