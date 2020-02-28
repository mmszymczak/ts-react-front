import React from 'react';
import { useMappedState } from 'redux-react-hook';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import homeSelector from 'views/Home/data/redux/selectors/homeSelector';
import useInitHome from 'views/Home/data/useInitHome';
import { IState } from 'services/common/redux/reducers/interfaces/IState';

function Home(props: RouteComponentProps) {
  const { isHomeLoading } = useHomePropsFromStore();
  useInitHome();

  return (
    <Container className='container-max-1600'>
      {isHomeLoading ?
        <Spinner animation='border' role='status' />
        :
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '750px',
        }}>
          <div style={{ fontSize: '24px' }}>Welcome to React Boilerplate!</div>
          <br />
        </div>
      }
    </Container>
  );
}

function useHomePropsFromStore() {
  const homeProps = useMappedState(
    (state: IState) => homeSelector(state),
  );
  return homeProps;
}

export default Home;
