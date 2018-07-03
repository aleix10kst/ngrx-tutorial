import {User} from '../model/user.model';
import {AuthActions, AuthActionTypes} from './auth.actions';


export interface State {
  loggedIn: boolean;
  user: User;
}

export const initialState: State = {
  loggedIn: false,
  user: undefined
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };
    case AuthActionTypes.LogoutAction:
      return initialState;
    default:
      return state;
  }
}

