import { all } from 'redux-saga/effects';
import { watchError } from 'services/errorHandling/redux/sagas/errorSaga';
import { watchHomeEvents } from 'views/Home/data/redux/sagas/homeSaga';
import { watchInitEvents } from 'services/init/redux/sagas/initAppSaga';

export default function* rootSaga() {
  yield all([
    watchError(),
    watchHomeEvents(),
    watchInitEvents(),
  ]);
}
