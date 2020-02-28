import { INIT_ACTION_TYPES } from 'services/init/redux/actions/actionTypes';
import { IActionPayload } from 'makeAction';
import { IInitReducer } from 'services/init/redux/reducers/interfaces/IInitReducer';

const defaultState = {
  done: false,
};

export default function init(state: IInitReducer = defaultState, action: IActionPayload<any>) {
  switch (action.type) {

    case INIT_ACTION_TYPES.INIT_APP_SUCCESS: {
      return {
        ...state,
        done: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
