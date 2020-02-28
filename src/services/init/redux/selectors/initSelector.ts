import { IState } from 'services/common/redux/reducers/interfaces/IState';

export const getInit = (state: IState) => state.init;
export const getInitDone = (state: IState) => getInit(state).done;
