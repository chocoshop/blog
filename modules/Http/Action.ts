export default class Action {
    private action: string;

    constructor(action: string) {
        if (!action.includes('@')) {
            throw new Error('Invalid Action Format');
        }
        this.action = action;
    }

    public getController(): string {
        return this.action.split('@')[0];
    }

    public getMethod(): string {
        return this.action.split('@')[1];
    }
}