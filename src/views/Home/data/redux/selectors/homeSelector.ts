import { IHome } from 'views/Home/data/redux/reducers/interfaces/IHome';
import { IState } from 'services/common/redux/reducers/interfaces/IState';

export interface IHomeSelector {
  isHomeLoading: boolean;
}

export const getHome = (state: IState): IHome => state.home;

const homeSelector = (state: IState): IHomeSelector => {
  return {
    isHomeLoading: getHome(state).isLoading,
  };
};

export default homeSelector;
