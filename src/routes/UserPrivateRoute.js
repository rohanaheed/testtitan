import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UserPrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return localStorage.getItem('login_user') ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/user/login', state: { from: props.location } }} />)
    }}
  />
);

export default UserPrivateRoute;