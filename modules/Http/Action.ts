export default class Action {
    private action: string;

    constructor(action: string) {
        if (!action.includes('@')) {
            throw new Error('Invalid Action Format');
        }
        this.action = action;
    }

    getController(): string {
        return this.action.split('@')[0];
    }

    getMethod(): string {
        return this.action.split('@')[1];
    }
}