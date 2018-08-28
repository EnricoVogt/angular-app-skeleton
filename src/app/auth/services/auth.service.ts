import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AuthState } from '../states/auth.state'
import * as AuthActions from '../actions/actions';

import { LoginModel } from '../models/models';
import { Store, select } from '@ngrx/store';

const API_TOKEN_KEY = "APP_API_TOKEN"

@Injectable()
export class AuthService {

  getAPIToken() {
    return localStorage.getItem(API_TOKEN_KEY);
  }

  setAPIToken(token: string) {
    return localStorage.setItem(API_TOKEN_KEY, token);
  }

  unsetAPIToken() {
    localStorage.removeItem(API_TOKEN_KEY)
  }

  autoLogin() {
    let token = this.getAPIToken();
    if(token){
      this.store.dispatch(new AuthActions.LoginSuccess({ 
        rememberLogin: true,
        token: token
      }));
    }
  }

  constructor(private store: Store<AuthState>) {
    this.autoLogin();
  }

  login(loginModel: LoginModel): Observable<any> {
    return of(
      { 
        rememberLogin: loginModel.rememberLogin ,
        token: "TOKEN"
      }
    )
  }
}