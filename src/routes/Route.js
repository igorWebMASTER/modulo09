import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
   componet: Component,
   isPrivate = false,
  ...rest,
 }) {
  const signed = false;

  if(!signed && isPrivate){
    return <Redirect to="/" />
  }

  if(signed && !isPrivate){
    return <Redirect to="/dashboard" />
  }

  return (
    <Route
    {...res}
    component={Component}
    />
  );
 }

 RouteWrapper.PropTypes = {
   isPrivate: PropTypes.bool,
   component: PropTypes.oneoOfType([PropTypes.element, PropTypes.func]).isRequired,
 };

 RouteWrapper.defaultProps = {
   isPrivate: false,
 };
