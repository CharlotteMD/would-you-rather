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
        choice: {
          A: '',
          B: ''
        },
        comment: ''
      }]
    },
    choosesA: null,
    choosesB: null,
    totalAnswers: null
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

  pickA = () => {
    return
      this.setState.choosesA = choosesA ++;
      console.log(this.state.choosesA);
  }

  pickB = () => {
    return this.setState.choosesB ++;
  }

  totalAnswers = () => {
    return this.setState.totalAnswers = (this.state.choosesA + this.state.choosesB);
  }

  percent = () => {
    return (this.state.choosesA / this.state.totalAnswers) * 100;
  }

  // every time a choice is made add one to choice
  // loop over choice, add one for every time A is chosen
  // divide the number of times A is chosen by the number of choices made and times by 100 to make a percent
  // css fills glass with percent of choice A is chosen

  // aWins () {
  //
  //   return this.state.question.answers.choice === A ? this.setState.choosesA ++ : false;
  //
  //
  //   // if (choices === A) {
  //   //   choosesA ++;
  //   //   choices ++;
  //   // } else {
  //   //   choices ++;
  //   // }
  // }


  render() {
    return(

      <div className="questions-index">

        <div className="container">

          <h2>{`Would you rather ${this.state.question.ratherA} or ${this.state.question.ratherB}?`}</h2>

          { this.state.question.answers.map((answer, i) => {
            return <div className="col-md-4 col-sm-6 col-xs-12" key={i}>
              <div className="card">



              </div>



            </div>;
          })}

          {/* <div className="poll">

            <div className="middle">

              <div className="so-far"> */}

                <div id="glass">
                  <div id="progress">
                  </div>
                </div>

                {/* <h3>Total raised so far:</h3><div id ="raised"></div>
              </div>

              <div className="target">
                <h2>Target:</h2><h2 id="target">£100</h2>
              </div>

            </div>

            <h3>Additional Funds Needed:</h3><h2 id="additionalFunds">Im still to raise!</h2>

          </div>

          <div className="buttons">
            <button className="one">£1</button>
            <button className="five">£5</button>
            <button className="ten">£10</button>
          </div> */}

          {/* add all Bs and all As and show in graph/poll */}

          <button onSubmit="pickA">A</button>
          <button onSubmit="pickB">B</button>

        </div>

      </div>

    );
  }
}



export default QuestionsShow;
