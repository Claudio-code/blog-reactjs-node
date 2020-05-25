import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  ...rest
}) {

  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  );

}

RouteWrapper.prototype = {
  component: PropTypes.oneOfType([
    PropTypes.element, PropTypes.func,
  ]).isRequired,
};
