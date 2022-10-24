export type ResponseErrors = {
    errors: ResponseErrorItem[];
}

export type ResponseErrorItem = {
    message: string;
    field?: string;
}
