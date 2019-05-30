import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {push} from 'react-router-redux';
import {authConsts} from './constants';
import history from '../../utils/history';


// const getBlaBlaBla = (payload) => {
//   return axios.post('http://localhost:8080/auth/login', payload)
//     .then(response => localStorage.setItem('authItem', response.data.access_token))
// }
//
//
// export function* loginSubmit(payload) {
//   try {
//     const response = yield call(getBlaBlaBla, payload.payload);
//     if (response) {
//       yield put(push('/app'));
//     }
//   } catch (err) {
//     yield put({ type: authConsts.LOGIN_FAIL, err });
//   }
// }

export function* loginSubmit(payload) {
  try {
    const data = yield axios({
      url: 'http://localhost:8080/auth/login',
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      data: payload.payload,
    });
    if (data.data.access_token) {
      localStorage.setItem('authItem', data.data.access_token);
      // yield put(push('/app'));
      // yield call([history, history.push], '/app');
      history.push('/app');
    }
  } catch (e) {
    yield put(loginSubmitError(authConsts.LOGIN_FAIL, e));
  }
}

export const loginSubmitSuccess = (type, payload) => ({
  type,
  payload,
});

export const loginSubmitError = (type, error) => ({
  type,
  error,
});

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(authConsts.LOGIN_REQUEST, loginSubmit);
}
