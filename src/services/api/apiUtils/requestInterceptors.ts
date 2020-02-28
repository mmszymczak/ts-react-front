import axios, { AxiosResponse, AxiosError } from 'axios';
import IErrorData from 'services/api/interfaces/IErrorData';
import store from 'config/store';
import { handleErrorAction, cleanErrorAction } from 'services/errorHandling/redux/actions/errorHandlingActions';
import errorGenerator from 'services/errorHandling/utils/errorGenerator';

/**
 * Set up library interceptors.
 * @returns void
 */
function setRequestInterceptors() {
  const { dispatch } = store;

  // Setup axios interceptors
  axios.interceptors.response.use(
    (response: AxiosResponse<{ stackTrace: IErrorData }>) => {
      dispatch(cleanErrorAction());
      if (response.data.stackTrace || response.status > 399) {
        dispatch(handleErrorAction(response.data.stackTrace));
      }
      return response;
    },
    (error: AxiosError) => {
      console.log('error', error);
      if (error.response && (error.response.data as { stackTrace: IErrorData }).stackTrace) {
        // If stackTrace was returned
        dispatch(handleErrorAction((error.response.data as { stackTrace: IErrorData }).stackTrace));
      } else {
        // If no stackTrace is present. We create generic error object
        const errorObject = errorGenerator(error);
        dispatch(handleErrorAction(errorObject));
      }
      return Promise.reject(error.response);
    },
  );
}

export default setRequestInterceptors;
