import { HOME_ACTION_TYPES } from 'views/Home/data/redux/actions/actionTypes';
import makeAction, { makeActionWithPayload } from 'makeAction';

export const initHomeAction = makeAction(HOME_ACTION_TYPES.INIT_HOME);
export const initHomeSuccessAction = makeActionWithPayload<{ key: string; }>(HOME_ACTION_TYPES.INIT_HOME_SUCCESS);
