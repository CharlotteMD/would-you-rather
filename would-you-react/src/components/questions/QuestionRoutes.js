import React from 'react';
import { Switch, Route } from 'react-router-dom';


import QuestionsIndex from './QuestionsIndex';
import QuestionsShow from './QuestionsShow';
import QuestionsNew from './QuestionsNew';


const QuestionRoutes = () => {
  return (
    <Switch>
      <Route exact path="/questions" component={QuestionsIndex} />
      <Route exact path="/questions/new" component={QuestionsNew} />
      <Route exact path="/questions/:id" component={QuestionsShow} />
    </Switch>
  );
};

export default QuestionRoutes;
