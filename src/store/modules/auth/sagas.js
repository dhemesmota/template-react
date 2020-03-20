import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response?.data;
    console.log(token);

    // validações

    yield put(signInSuccess(token, user));
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
