type Routes = {
    [path: string]: string
}

type Methods = {
    invoke?,
}

type TController<T> = {
    [P in keyof T]: T[P];
}
