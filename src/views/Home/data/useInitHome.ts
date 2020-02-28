import { useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';
import { initHomeAction } from 'views/Home/data/redux/actions/homeActions';

function useInitHome() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initHomeAction());
  }, []);
}

export default useInitHome;
