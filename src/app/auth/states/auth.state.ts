

export interface AuthStatusState {
    isAuthenticated: boolean,
    hasError: boolean,
    token: string,
}

export interface AuthPageState {
    authForm: AuthFormState,
    error: string
}

export interface AuthFormState {
    email: string,
    password: string,
    rememberLogin: boolean,
}

export interface AuthState {
    status: AuthStatusState;
    authPage: AuthPageState;
}

export const initAuthStatusState:AuthStatusState = {
    isAuthenticated: false,
    hasError: false,
    token: "",
}

export const initAuthFormState:AuthFormState = {
    email: "",
    password: "",
    rememberLogin: false,
}

export const initAuthPageState:AuthPageState = {
    authForm: initAuthFormState,
    error: "",
}

export const initAuthState:AuthState = {
    status: initAuthStatusState,
    authPage: initAuthPageState
}
