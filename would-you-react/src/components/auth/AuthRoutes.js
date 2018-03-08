import React from 'react';
import { Switch, Route } from 'react-router-dom';


import UserLogin from './users/UserLogin';

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/users/login" component={UserLogin} />
    </Switch>
  );
};

export default AuthRoutes;
