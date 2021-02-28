import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './user-actions';

const userReducer = createReducer(null, {
  [actions.signUpSuccess]: (state, { payload }) => payload,
  [actions.logInSuccess]: (state, { payload }) => payload,
  [actions.logOutSuccess]: () => null,
});

const isLoggedInReducer = createReducer(false, {
  [actions.logInSuccess]: () => true,
  [actions.logOutSuccess]: () => false,
  [actions.signUpSuccess]: () => true,
});

const userLoaderReducer = createReducer(false, {
  [actions.signUpRequest]: () => true,
  [actions.signUpSuccess]: () => false,
  [actions.signUpError]: () => false,
  [actions.logInRequest]: () => true,
  [actions.logInSuccess]: () => false,
  [actions.logInError]: () => false,
  [actions.logOutRequest]: () => true,
  [actions.logOutSuccess]: () => false,
  [actions.logOutError]: () => false,
});

const userErrorReducer = createReducer(null, {
  [actions.logOutRequest]: () => null,
  [actions.logInRequest]: () => null,
  [actions.signUpRequest]: () => null,
  [actions.signUpError]: (_, { payload }) => payload,
  [actions.logInError]: (_, { payload }) => payload,
  [actions.logOutError]: (_, { payload }) => payload,
});

const rootUserReducer = combineReducers({
  user: userReducer,
  userLoader: userLoaderReducer,
  userError: userErrorReducer,
  isLoggedIn: isLoggedInReducer,
});

export default rootUserReducer;
