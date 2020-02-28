import axios from 'axios';
import { IHeadersCommon, ISetCommonRequestHeader } from 'services/api/interfaces/IApiUtils';

export const setCommonRequestHeader: ISetCommonRequestHeader = (headerName, headerValue, valueMapper) => {
  (axios.defaults.headers as IHeadersCommon).common[headerName] =
    valueMapper ? valueMapper(headerValue) : headerValue;
};
