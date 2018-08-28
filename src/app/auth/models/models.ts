export interface LoginModel {
    email: string,
    password: string,
    rememberLogin: boolean
}

export interface LoginSuccessModel {
    rememberLogin: boolean,
    token: string
}

export interface LoginFailureModel {
    error: any
}