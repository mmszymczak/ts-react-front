export default interface IErrorData {
  code: string;
  description: string;
  stackTrace?: string;
  title: string;
  type: string;
  infoUrl?: string;
}
