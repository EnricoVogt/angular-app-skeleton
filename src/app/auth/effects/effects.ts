import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';

import {
  AuthActionTypes,
  Login,
  Logout,
  LoginFailure,
  LoginSuccess,
} from '../actions/actions';
import { LoginModel } from '../models/models';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    switchMap((auth: LoginModel) =>
      this.authService.login(auth)
        .pipe(
          map(user => new LoginSuccess(user)),
          catchError(error => of(new LoginFailure(error)))
        )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccess>(AuthActionTypes.LoginSuccess),
    tap(action => {
      if(action.payload.rememberLogin) {
        this.authService.setAPIToken(action.payload.token)
      }
      this.router.navigate(['/'])
    })
  );

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(
    ofType<LoginFailure>(AuthActionTypes.LoginFailure),
    tap(() => this.router.navigate(['/auth']))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => {
      this.authService.unsetAPIToken()
      this.router.navigate(['/auth'])
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}