import { HOME_ACTION_TYPES } from 'views/Home/data/redux/actions/actionTypes';
import { IActionPayload } from 'makeAction';
import { IHome } from 'views/Home/data/redux/reducers/interfaces/IHome';

const defaultState: IHome = {
  isLoading: true,
};

// TODO: Create sef of action's payloads for this reduced to accept
export default function home(state = defaultState, action: IActionPayload<{ key: string; }>) {
  switch (action.type) {
    case HOME_ACTION_TYPES.INIT_HOME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };

    default: {
      return state;
    }
  }
}
