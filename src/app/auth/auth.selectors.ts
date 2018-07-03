import {createSelector} from '@ngrx/store';

export const selectAuthStatee = state => state.auth;

export const isLoggedIn = createSelector(
  selectAuthStatee,
  auth => auth.loggedIn
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
