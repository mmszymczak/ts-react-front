import store from 'config/store';
import { initAppAction } from 'services/init/redux/actions/initActions';
import { IInitReduxParams } from 'services/init/redux/interfaces/IInitRedux';

/**
 * This is function where you place all of your init actions.
 * WARNING: remember that all dispatch are non-blocking.
 * @param {initReduxParams} IInitReduxParams
 * @returns void
 */
function initRedux(initReduxParams: IInitReduxParams): void {
  const {} = initReduxParams;
  const { dispatch } = store;

  const initAppPayload = {};

  dispatch(initAppAction(initAppPayload));
}

export default initRedux;
