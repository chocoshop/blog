export default class NotFoundError extends Error {
    public message: string;

    constructor(message?: string) {
        super();
        this.message = message ?? 'Not Found';
    }
}