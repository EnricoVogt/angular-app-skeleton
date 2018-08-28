import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { selectIsAuthenticatedState } from '../selectors/selectors'
import { AuthState } from '../states/auth.state'
import * as AuthActions from '../actions/actions';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<AuthState>) { }

  canActivate():Observable<boolean> {
    return this.store.select(selectIsAuthenticatedState).pipe(switchMap(x => {

      if(!x){
        this.store.dispatch(new AuthActions.LoginFailure({error:""}));
      }

      return of(x)
    }))
    //return true;
  }
}
