import React from 'react';
import { Switch, Route } from 'react-router-dom';


import QuestionsIndex from './QuestionsIndex';


const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/questions" component={QuestionsIndex} />
    </Switch>
  );
};

export default AuthRoutes;
