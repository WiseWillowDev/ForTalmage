export interface ApiErrorWrapper {
    errors: ApiError;
}

export interface ApiError {
    errors: Errors[];
}


export interface Errors {
    code: string;
    data: any;
    message: string;
}

