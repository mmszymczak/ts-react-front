import { combineReducers, Reducer } from 'redux';
import { IState } from 'services/common/redux/reducers/interfaces/IState';

import error from 'services/errorHandling/redux/reducers/errorReducer';
import home from 'views/Home/data/redux/reducers/homeReducer';
import init from 'services/init/redux/reducers/initReducer';

const combineReducer: any = combineReducers({
  error,
  home,
  init,
});

export default combineReducer;
