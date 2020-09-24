/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {
  const logged = true;

  if (logged) {
    return (
      <PrivateRoutes />
    );
  } else {
    return (
      <PublicRoutes />
    );
  }
};

export default Routes;
