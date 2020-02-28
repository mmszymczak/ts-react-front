import React from 'react';
import ReactDOM from 'react-dom';
import { createStore as createReduxStore } from 'redux';
import { StoreContext } from 'redux-react-hook';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import mockState from './mockHomeState';

it('renders without crashing', () => {
  const store = createReduxStore(
        (state: any = mockState, action: any): any =>
            action.type === 'test' ? action.payload : state,
    );

  const div = document.createElement('div');
  ReactDOM.render(
        <BrowserRouter basename='/'>
            <StoreContext.Provider value={store}>
                <Route component={Home} />
            </StoreContext.Provider>
        </BrowserRouter>,
        div);
  ReactDOM.unmountComponentAtNode(div);
});
