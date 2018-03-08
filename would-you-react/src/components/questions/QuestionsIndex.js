import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import moment from 'moment';

class QuestionsIndex extends Component {
      state = {
        questions: [{
          ratherA: '',
          ratherB: '',
          addedBy: '',
          answers: [{
            createdBy: '',
            choice: '',
            comment: ''
          }]
        }]
      }


      componentDidMount() {
        Axios
          .get('/api/questions')
          .then(res => {
            this.setState({ questions: res.data }, () => console.log(this.state.question));
          })
          .catch(err => console.log(err));
      }

      render() {
        return(
          <div className="question-index">
            <div className="container">
              <h1>View Questions</h1>

              <div className="row">

                { this.state.questions.map((question, i) => {
                  return <div className="col-md-4 col-sm-6 col-xs-12" key={i}>
                    <div className="card">

                      <div className="question">
                        <h2>{`Would you rather ${question.ratherA} or ${question.ratherB}?`}</h2>
                      </div>

                      <div className="showlink">
                        <Link to={`/answers/${question.id}`}>
                          <button>View Answers</button>
                        </Link>
                      </div>


                    </div>
                  </div>;
                })}


              </div>
            </div>
          </div>
        );
      }
}


export default QuestionsIndex;
