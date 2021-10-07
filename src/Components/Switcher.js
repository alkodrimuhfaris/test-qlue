import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from './Auth/Login';
import NotFound from './Layout/Content/NotFound';
import PrivateRoute from './Auth/PrivateRoute';

export default function Switcher({config, isLoggedIn}) {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      {config.map((val, idx) => {
        const {Component, route} = val;
        return (
          <PrivateRoute
            key={idx}
            isAuthenticated={isLoggedIn}
            path={route}
            exact
          >
            <Component />
          </PrivateRoute>
        );
      })}
      <Redirect
        from="/"
        to={{pathname: '/table', state: {isFromHome: true}}}
        exact
      />
      <Route component={NotFound} />
    </Switch>
  );
}
