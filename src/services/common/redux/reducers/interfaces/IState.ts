import { IErrorReducer } from 'services/errorHandling/redux/reducers/interfaces/IErrorReducer';
import { IHome } from 'views/Home/data/redux/reducers/interfaces/IHome';
import { IInitReducer } from 'services/init/redux/reducers/interfaces/IInitReducer';

export interface IState {
  error: IErrorReducer;
  home: IHome;
  init: IInitReducer;
}
