import React from 'react';
import Axios from 'axios';

import QuestionsForm from '../questions/QuestionsForm';
import Auth from '../../lib/Auth';

class QuestionsNew extends React.Component {

  state = {
    question: {
      ratherA: '',
      ratherB: '',
      addedBy: ''
    },
    errors: {}
  };

  handleQuestionChange = ({ target: { name, value }}) => {
    const question = Object.assign({}, this.state.question, { [name]: value });
    // const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ question });
    console.log('question info: ', question);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hitting');
    Axios
      .post('/api/questions', this.state.question, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`} })
      .then(this.props.history.push('/questions'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Create a New Question</h1>
        <QuestionsForm
          history={this.props.history}
          handleQuestionChange={this.handleQuestionChange}
          handleSubmit={this.handleSubmit}
          question={this.state.question}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default QuestionsNew;
