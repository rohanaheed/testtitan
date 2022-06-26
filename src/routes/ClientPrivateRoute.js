import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ClientPrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return localStorage.getItem('token') ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/admin/signin', state: { from: props.location } }} />)
    }}
  />
);

export default (ClientPrivateRoute);