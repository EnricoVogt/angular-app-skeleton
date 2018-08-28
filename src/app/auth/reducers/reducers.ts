import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';

import { AuthActionTypes, AuthActions } from '../actions/actions'

import { 
    AuthState, 
    AuthStatusState, 
    AuthPageState, 
    initAuthPageState, 
    initAuthStatusState, 
    initAuthFormState
  } from '../states/auth.state'

export const reducers: ActionReducerMap<AuthState> = {
    status: statusReducer,
    authPage: authPageReducer,
};

export function statusReducer(state = initAuthStatusState, action:AuthActions):AuthStatusState {
    //console.log(action, 'statusReducer')
    switch (action.type) {
        case AuthActionTypes.LoginSuccess: {
          return {
            ...state,
            isAuthenticated: true,
            token: action.payload.token
          };
        }
        case AuthActionTypes.Logout: {
          return initAuthStatusState;
        }
        default: {
          return state;
        }
    }
}

export function authPageReducer(state = initAuthPageState, action:AuthActions):AuthPageState {
    //console.log(action, 'authPageReducer')
    switch (action.type) {
      case AuthActionTypes.Login: {
        return {
          ...state,
          authForm: action.payload,
        };
      }
      case AuthActionTypes.Logout: {
        return {
          ...state,
          authForm: initAuthFormState,
        };
      }
      default: {
        return state;
      }
    }
}