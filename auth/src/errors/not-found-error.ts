import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode = 400;
    constructor() {
        super('Route not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeError() {
        return [{ message: 'Not Found' }];
    }
}
