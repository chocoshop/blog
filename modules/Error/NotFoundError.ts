export default class NotFoundError extends Error {
    public message: string;
    public statusCode: number = 404;

    constructor(message?: string) {
        super();
        this.message = message ?? 'Not Found';
    }
}