import initRedux from 'services/init/redux/initRedux';
import setRequestInterceptors from 'services/api/apiUtils/requestInterceptors';
import initCommonRequestHeaders from 'services/init/api/initApi';

/**
 * Init application function.
 * The actions are performed in specific order.
 * @returns void
 */
async function initApp() {
  initRedux({});
  setRequestInterceptors();
  initCommonRequestHeaders({
    'Example-Header': 'example-header-value',
  });
}

export default initApp;
