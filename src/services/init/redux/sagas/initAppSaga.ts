import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { INIT_ACTION_TYPES } from 'services/init/redux/actions/actionTypes';
import { IActionPayload } from 'makeAction';
import { initAppSuccessAction } from 'services/init/redux/actions/initActions';
import { IInitAppAction } from 'services/init/redux/actions/interfaces/IInitAppAction';
import request from 'request';

/**
 * This is function triggers middleware flow for basic async app run.
 * This allows for app to proceed and display loader while rest of app waits for initAppSuccessAction.
 * initAppSuccessAction => state.init.done = true;
 * @param {action} IActionPayload<IInitAppAction>
 * @returns void
 */
function* initAppSaga(action: IActionPayload<IInitAppAction>) {
  try {
    const {} = action.payload;

    yield put(initAppSuccessAction(true));
    // yield delay(0);
    // yield call(() => request.get(`/test`));
  } catch (error) {
    console.error(error);
  }
}

export function* watchInitEvents() {
  yield takeLatest(INIT_ACTION_TYPES.INIT_APP, initAppSaga);
}
