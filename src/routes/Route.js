import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import AuthLayout from '../layouts/auth';
import DefaultLayout from '../layouts/default';

export default function RouteWrapper({ children, isPrivate, ...rest }) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route {...rest}>
      <Layout>{children}</Layout>
    </Route>
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
