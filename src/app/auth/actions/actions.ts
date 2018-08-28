import { Action } from '@ngrx/store';
import { LoginModel,LoginSuccessModel,LoginFailureModel } from '../models/models'


export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
}

export type AuthActions = 
  Login | 
  Logout | 
  LoginSuccess | 
  LoginFailure

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: LoginModel) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: LoginSuccessModel) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: LoginFailureModel) {}
}