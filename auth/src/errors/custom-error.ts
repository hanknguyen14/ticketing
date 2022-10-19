import { ResponseErrorItem } from "../types";

export abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
    abstract serializeError(): ResponseErrorItem[]
}
