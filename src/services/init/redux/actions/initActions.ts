import { INIT_ACTION_TYPES } from 'services/init/redux/actions/actionTypes';
import { makeActionWithPayload } from 'makeAction';
import { IInitAppAction } from 'services/init/redux/actions/interfaces/IInitAppAction';

export const initAppAction = makeActionWithPayload<IInitAppAction>(INIT_ACTION_TYPES.INIT_APP);
export const initAppSuccessAction = makeActionWithPayload<boolean>(INIT_ACTION_TYPES.INIT_APP_SUCCESS);
