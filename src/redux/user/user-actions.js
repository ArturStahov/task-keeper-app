import { createAction } from '@reduxjs/toolkit';

//signUp actions
export const signUpRequest = createAction('user/signUpRequest');
export const signUpSuccess = createAction('user/signUpSuccess');
export const signUpError = createAction('user/signUpError');

//logIn actions
export const logInRequest = createAction('user/logInRequest');
export const logInSuccess = createAction('user/logInSuccess');
export const logInError = createAction('user/logInError');

//logOut actions
export const logOutRequest = createAction('user/logOutRequest');
export const logOutSuccess = createAction('user/logOutSuccess');
export const logOutError = createAction('user/logOutError');
