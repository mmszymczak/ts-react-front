import React from 'react';
import ReactDOM from 'react-dom';
import ReactResizeDetector from 'react-resize-detector';
import * as serviceWorker from './serviceWorker';
import { StoreContext } from 'redux-react-hook';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import store from 'config/store';
import routes from 'config/routes';
import { onResize } from 'services/init/helpers';
import initApp from 'services/init/initAppService';

// GUARDIANS
import IsAppReady from 'config/guardians/IsAppReady';

// COMPONENTS
import ErrorBasket from 'components/errorBasket/errorBasket';
import GlobalConfirmationModal from 'components/confirmationModal/globalConfirmationModal';
import { Navbar, UserProfile } from './components';

import { Auth0Provider } from "./services";
import config from "config/auth_config";
import history from "services/common/utils/history";

const onRedirectCallback = (appState?: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

/**
 * main() function for your application.
 * @async
 * @returns Promise<void>
 */
async function main(): Promise<void> {
  try {
    await initApp();

    ReactDOM.render(
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        audience={config.audience}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <BrowserRouter>
          <StoreContext.Provider value={store}>
            <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
            <Navbar />
            {/* <ErrorBasket /> */}
            <IsAppReady>
              {routes}
            </IsAppReady>
            <GlobalConfirmationModal />
          </StoreContext.Provider>
        </BrowserRouter>
      </Auth0Provider>, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
  } catch (error) {
    console.error(error);
  }
}

main();
