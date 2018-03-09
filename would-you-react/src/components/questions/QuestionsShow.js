import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';


import Axios from 'axios';

class QuestionsShow extends React.Component {
  state = {
    question: {
      ratherA: '',
      ratherB: '',
      addedBy: '',
      answers: [{
        createdBy: '',
        choice: '',
        comment: ''
      }]
    }
  }


  componentDidMount() {
    Axios
      .get(`/api/questions/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ question: res.data }, () => console.log(this.state.question));
      })
      .catch(err => console.log(err));

  }

  deleteQuestion = () => {
    Axios
      .delete(`/api/questions/${this.props.match.params.id}`,
        { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then(() => this.props.history.push('/questions'))
      .catch(err => console.log(err));
  }

  render() {
    return(

      <div className="questions-index">

        <div className="container">

          <h2>{`Would you rather ${this.state.question.ratherA} or ${this.state.question.ratherB}?`}</h2>

          { this.state.question.answers.map((answer, i) => {
            return <div className="col-md-4 col-sm-6 col-xs-12" key={i}>
              <div className="card">

                <div className="answer">

                  {/* add all Bs and all As and show in graph/poll */}

                </div>



              </div>
            </div>;
          })}

        </div>

      </div>

    );
  }
}



export default QuestionsShow;
