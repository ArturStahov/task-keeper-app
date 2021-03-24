import axios from 'axios';
import * as action from './user-actions';
import {
  fetchLogin,
  fetchRegistration,
  fetchAddUserAvatar,
  fetchLogout,
} from 'services/fetchApi';

const addToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logIn = formData => async dispatch => {
  dispatch(action.logInRequest());
  try {
    const result = await fetchRegistration(formData);
    console.log('🚀 ~ file: user-operations.js ~ line 23 ~ data', result);
    const { avatar, email, name, id, token } = result.data.data;
    addToken.set(token);

    //сдесь зделать запрос за юзером или переделать бек что бі отдал юзера
    // const user = {
    //   avatar,
    //   email,
    //   name,
    //   id
    // }

    // dispatch(action.logInSuccess(user))
  } catch (error) {
    dispatch(action.logInError(error.message));
  }
};

export const signUp = formData => async dispatch => {
  dispatch(action.signUpRequest());

  try {
    const result = await fetchRegistration(formData);
    console.log('🚀 ~ file: user-operations.js ~ line 23 ~ data', result);
    const { avatar, email, name, id, token } = result.data.data;

    addToken.set(token);

    const user = {
      avatar,
      email,
      name,
      id,
    };

    dispatch(action.signUpSuccess(user));
  } catch (error) {
    dispatch(action.signUpError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(action.logOutRequest());
};
