import { takeLatest, put, call } from 'redux-saga/effects';
import { HOME_ACTION_TYPES } from 'views/Home/data/redux/actions/actionTypes';
import { IActionPayload } from 'makeAction';
import { initHomeSuccessAction } from 'views/Home/data/redux/actions/homeActions';

function* initHomeSaga(action: IActionPayload<unknown>) {
  try {
    // Mock timeout
    yield call(() => new Promise(resolve => setTimeout(() => resolve(true), 3000)));
    yield put(initHomeSuccessAction({ key: 'INIT SUCCESS' }));
  } catch (error) {
    console.error(error);
  }
}

export function* watchHomeEvents() {
  yield takeLatest(HOME_ACTION_TYPES.INIT_HOME, initHomeSaga);
}
