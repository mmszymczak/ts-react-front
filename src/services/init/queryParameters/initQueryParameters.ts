import queryString from 'query-string';

/**
 * Function returning given query parameters.
 * @returns queryString.ParsedQuery<string>
 */
export function getQueryParameters() {
  return queryString.parse(window.location.search);
}

export default getQueryParameters;
