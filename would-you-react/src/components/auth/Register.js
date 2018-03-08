import React from 'react';
import Axios from 'axios';

import UserForm from './UserForm';
import Auth from '../../lib/Auth';

class Register extends React.Component {

  state = {
    user: {
      email: '',
      name: '',
      password: '',
      passwordConfirmation: ''
    }
  };

  handleUserChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
    console.log('user info: ', user);
  }


  handleSubmit = (e) => {
    e.preventDefault();

      Axios
        .post('/api/register', this.state.user)
        .then(res => {
          console.log('the response from the api', res);
          Auth.setToken(res.data.token);
          this.props.history.push('/');
        })
        .catch(err => console.log(err));
    }

  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <UserForm
          user={this.state.user}
          handleUserChange={this.handleUserChange}
          handleSubmit={this.handleSubmit}
          showHotelForm={this.state.showHotelForm}
        />
      </div>
    );
  }
}

export default Register;
