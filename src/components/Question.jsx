import React from 'react';
import PropTypes from 'prop-types';

function Question(props){
  return (
    <div onClick={() => {props.onQuestionSelection(props.questionId);}}>
      <ul>
        <li>Question: {props.question}</li>
        <li>Your Current Answer: {props.answer}</li>
      </ul>
    </div>
  );

}

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  type: PropTypes.string,
  questionId: PropTypes.string.isRequired,
  onQuestionSelection: PropTypes.func
}

export default Question;
