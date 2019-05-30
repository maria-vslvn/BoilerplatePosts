import { call, put, takeLatest } from 'redux-saga/effects';
import { postConsts } from './constants';

const callApi = url => fetch(url).then(response => response.json());

function* fetchPosts() {
  try {
    const posts = yield call(callApi, 'http://localhost:8080/posts');

    yield put({ type: postConsts.POSTS_SUCCESS, posts });
  } catch (err) {
    console.error(err);
    yield put({ type: postConsts.POSTS_FAIL, err });
  }
}

// Individual exports for testing
// export default function* getPostsSaga() {
//   yield takeLatest(postConsts.GET_POSTS, fetchPosts);
// }

export default function* rootSaga() {
  yield [takeLatest(postConsts.GET_POSTS, fetchPosts)];
}
