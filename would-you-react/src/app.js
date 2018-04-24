import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './scss/style.scss';

import Navbar from './components/utility/Navbar';
import Footer from './components/utility/Footer';

import AuthRoutes from './components/auth/AuthRoutes';
import QuestionRoutes from './components/questions/QuestionRoutes';

import UserEdit from './components/auth/UserEdit';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>

          <Navbar />
          <Link to="/"><div className="logo"></div></Link>

          <AuthRoutes />
          <QuestionRoutes />


          <Route exact path="/users/:id/edit" component={UserEdit}/>
          {/* <Route exact path="/users/:id" component={UserProfile}/> */}

          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
