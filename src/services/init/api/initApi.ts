import {
  InitCommonHeadersParams, CommonHeadersKeys,
} from 'services/api/interfaces/IApiUtils';
import { setCommonRequestHeader } from 'services/api/apiUtils/requestHeaders';
import _ from 'lodash';

/**
 * Function to init request headers at start of your application.
 * @param  {InitCommonHeadersParams} commonHeadersParams
 * @returns void
 */
function initCommonRequestHeaders(commonHeadersParams: InitCommonHeadersParams): void {
  _.forEach(commonHeadersParams,
    (value, key: any | CommonHeadersKeys) => setCommonRequestHeader(key, value),
  );

  setCommonRequestHeader('Common-Headers', 'common-header-value');
}

export default initCommonRequestHeaders;
