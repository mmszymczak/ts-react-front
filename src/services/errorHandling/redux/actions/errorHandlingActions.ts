import { ERROR_ACTION_TYPES } from 'services/errorHandling/redux/actions/actionTypes';
import makeAction, { makeActionWithPayload } from 'makeAction';
import IErrorData from 'services/api/interfaces/IErrorData';

export const handleErrorAction = makeActionWithPayload<IErrorData>(ERROR_ACTION_TYPES.HANDLE_ERROR);

export const addErrorAction = makeActionWithPayload<IErrorData>(ERROR_ACTION_TYPES.ADD_ERROR);

export const cleanErrorAction = makeAction(ERROR_ACTION_TYPES.CLEAN_ERROR);
