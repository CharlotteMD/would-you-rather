import React from 'react';

const QuestionsForm = ({ handleQuestionChange, handleSubmit, question, errors }) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Would you rather...</label>
          <input
            type="string"
            name="ratherA"
            placeholder="Option 1"
            onChange={handleQuestionChange}
            value={question.ratherA}
            className="form-control"
          />
        </div>
        { errors.ratherA && <p>{errors.ratherA}</p>}

        <div className="form-group">
          <label>...or...?</label>
          <input
            type="string"
            name="ratherB"
            placeholder="Option 2"
            onChange={handleQuestionChange}
            value={question.ratherB}
            className="form-control"
          />
        </div>
        { errors.ratherB && <p>{errors.ratherB}</p>}

        <button className="main-button">Create</button>
      </form>
    </div>
  );
};

export default QuestionsForm;
