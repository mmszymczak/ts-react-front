import { takeLatest, put } from 'redux-saga/effects';
import { ERROR_ACTION_TYPES } from 'services/errorHandling/redux/actions/actionTypes';
import { IActionPayload } from 'makeAction';
import IErrorData from 'services/api/interfaces/IErrorData';
import { addErrorAction } from 'services/errorHandling/redux/actions/errorHandlingActions';

function handleError(action: IActionPayload<IErrorData>) {
  put(addErrorAction({ ...action.payload }));
}

export function* watchError() {
  yield takeLatest(ERROR_ACTION_TYPES.HANDLE_ERROR, handleError);
}
