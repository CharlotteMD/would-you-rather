import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import moment from 'moment';

import Auth from '../../lib/Auth';



class QuestionsIndex extends Component {
      state = {
        questions: [{
          ratherA: '',
          ratherB: '',
          addedBy: ''
          // answers: [{
          //   createdBy: '',
          //   choice: '',
          //   comment: ''
          // }]
        }]
      }


      componentDidMount() {
        Axios
          .get('/api/questions')
          .then(res => this.setState({ questions: res.data }))
          .catch(err => console.log(err));
      }

      render() {
        return(
          <div className="question-index">
            <div className="container">
              <h1>Very Important Questions</h1>

              {Auth.isAuthenticated() && <Link to="questions/new"><h2>Add a new question</h2></Link>}

              <div>
                <div className="row">

                  { this.state.questions.map((question, i) => {
                    return <div className="col-md-4 col-sm-6 col-xs-12" key={i}>
                      <div className="card">

                        <div className="question">
                          <h2>{`Would you rather ${question.ratherA} or ${question.ratherB}?`}</h2>
                        </div>

                        <div className="showlink">
                          <Link to={`/questions/${question.id}`}>
                            <button>View Answers</button>
                          </Link>
                        </div>


                      </div>
                    </div>;
                  })}

                </div>
              </div>
            </div>
          </div>
        );
      }
}


export default QuestionsIndex;
