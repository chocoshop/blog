type Routes = {
    [path: string]: string
}

type Methods = {
    invoke?,
}

type ControllerMethod = (req: http.IncomingMessage, res: http.ServerResponse) => http.ServerResponse;

type TController<T> = {
    [P in keyof T]: T[P];
}
