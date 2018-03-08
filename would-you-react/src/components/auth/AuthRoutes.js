import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Login from './Login';
import Register from './Register';

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default AuthRoutes;
