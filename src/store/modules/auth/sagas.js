import { toast } from 'react-toastify';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  toast.success('ok');
  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response?.data;
    toast.warn(token);

    // validações

    yield put(signInSuccess(token, user));
  } catch (err) {
    toast.error(JSON.stringify(err.response));
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
