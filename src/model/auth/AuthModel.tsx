export interface LoginModel {
    email: string;
    password: string;
}

export interface ResponseModel {
    data: LoginResponseModel;
}

export interface LoginResponseModel {
    token_type: string,
    access_token: string,
    expires_in: number,
    id: number,
    role: string;
}