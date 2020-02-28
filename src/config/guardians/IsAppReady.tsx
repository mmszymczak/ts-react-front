import React from 'react';
import { useMappedState } from 'redux-react-hook';
import { Container, Spinner } from 'react-bootstrap';
import { getInitDone } from 'services/init/redux/selectors/initSelector';
import { IState } from 'services/common/redux/reducers/interfaces/IState';

export interface IIsAppReady {
  children: JSX.Element | Array<JSX.Element>;
}

/**
 * Displays routes only when app initialization is done.
 * @param {component} JSX.Element
 * @returns JSX.Element
 * To check guardian pattern you can visit
 * https://www.thegreatcodeadventure.com/jwt-auth-with-phoenix-and-react-router-4/
 */
function IsAppReady({ children }: IIsAppReady) {
  const initDone = useMappedState(
    (state: IState) => getInitDone(state),
  );
  let result: JSX.Element;

  if (initDone) {
    result = <>{children}</>;
  } else {
    result = (
      <Container className='container-max-1600'>
        <Spinner animation='border' role='status' />
      </Container>
    );
  }

  return result;
}

export default IsAppReady;
