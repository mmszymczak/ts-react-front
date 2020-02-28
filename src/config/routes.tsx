import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HOME_PAGE, NOT_FOUND_PAGE, PROFILE_PAGE } from 'config/paths';

// GUARDIANS
import CanRender from 'config/guardians/canRenderPage';

// PAGES
import Home from 'views/Home/Home';
import NotFoundPage from 'views/NotFoundPage/NotFoundPage';
import { UserProfile, PrivateRoute } from '../components';

/**
 * Routes configuration for route
 * @constant
 * If you would like to nest routes with IndexRoute look at this example
 * https://stackoverflow.com/a/37491381
*/
const routes = (
  <Switch>
    <Route exact path={HOME_PAGE} render={props => CanRender(<Home {...props} />)} />
    <Route exact path={PROFILE_PAGE} render={props => CanRender(<UserProfile {...props} />)} />
    <PrivateRoute path="/profile" component={UserProfile} />
    <Route path={NOT_FOUND_PAGE} render={props => <NotFoundPage {...props} />} />
  </Switch>
);

export default routes;
