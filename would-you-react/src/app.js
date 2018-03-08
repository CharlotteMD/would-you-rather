import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './scss/style.scss';

import AuthRoutes from './components/auth/AuthRoutes';

import UserEdit from './components/auth/UserEdit';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Would You Rather?</h1>

          <AuthRoutes />

          <Route exact path="/users/:id/edit" component={UserEdit}/>
          {/* <Route exact path="/users/:id" component={UserProfile}/> */}
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
