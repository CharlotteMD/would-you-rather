import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './scss/style.scss';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

import UserEdit from './components/auth/UserEdit';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Would You Rather?</h1>

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />

        <Route exact path="/users/:id/edit" component={UserEdit}/>
        {/* <Route exact path="/users/:id" component={UserProfile}/> */}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);








class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <div className="title">

            <header>

              <Navbar />
              {/* <h1>GetARoom.com</h1> */}
              {/* <h2>Pay what you want for the best hotels in London</h2> */}
              <Link to="/"><h1>Get A Room</h1></Link>
            </header>

            <a className="app-nav" href="/auctions"><button>View Current Auctions</button></a>

          </div>




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
