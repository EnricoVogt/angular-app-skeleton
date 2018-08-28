import {
    createSelector,
    createFeatureSelector
  } from '@ngrx/store';

  import { 
    AuthState, 
    AuthStatusState, 
    AuthPageState, 
    initAuthPageState, 
    initAuthStatusState, 
    initAuthFormState
  } from '../states/auth.state'

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.status
);

export const selectIsAuthenticatedState = createSelector(
    selectAuthStatusState,
    (state: AuthStatusState) => state.isAuthenticated
);