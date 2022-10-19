import { ResponseErrorItem } from "../types";
import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    statusCode: number = 500;
    reason: string = "Failed to connect to database";
    constructor() {
        super('Error to connecting database');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeError(): ResponseErrorItem[] {
        return [{
            message: this.reason,
        }];
    }
}
