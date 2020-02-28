export type CommonHeadersKeys =
  'The-List' |
  'Of' |
  'Common-Headers' |
  'Example-Header';

export type CommonHeaders = { [key in CommonHeadersKeys]: string };

export interface IHeadersCommon {
  common: CommonHeaders;
}

export interface InitCommonHeadersParams {
  'Example-Header': string;
}

export type IInitCommonRequestHeaders = (commonHeadersParams: InitCommonHeadersParams) => void;
export type ISetCommonRequestHeader = (
  headerName: CommonHeadersKeys,
  headerValue: string,
  valueMapper?: (value: any) => string,
) => void;
