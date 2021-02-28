import * as action from './user-actions';

export const logIn = () => async dispatch => {
  dispatch(action.logInRequest());
};

export const signUp = () => async dispatch => {
  dispatch(action.signUpRequest());
};

export const logOut = () => async dispatch => {
  dispatch(action.logOutRequest());
};
