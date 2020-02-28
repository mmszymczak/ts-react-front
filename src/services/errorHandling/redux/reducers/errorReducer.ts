import { ERROR_ACTION_TYPES } from 'services/errorHandling/redux/actions/actionTypes';
import { IActionPayload } from 'makeAction';
import { IErrorReducer } from 'services/errorHandling/redux/reducers/interfaces/IErrorReducer';
import IErrorData from 'services/api/interfaces/IErrorData';
import _ from 'lodash';

const defaultState = {};

export default function error(state: IErrorReducer = defaultState, action: IActionPayload<IErrorData>) {
  const newState = _.cloneDeep(state);

  switch (action.type) {
    case ERROR_ACTION_TYPES.HANDLE_ERROR:
      return {
        ...newState,
        ...action.payload,
      };

    case ERROR_ACTION_TYPES.CLEAN_ERROR:
      return {
        ...defaultState,
      };

    default: {
      return newState;
    }
  }
}
