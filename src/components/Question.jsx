import React from 'react';
import PropTypes from 'prop-types';

function Question(props){
  return (
    <div onClick={() => {props.onQuestionSelection(props.questionId);}}>
      <link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One" rel="stylesheet" />
      <style jsx>{`
        ul {
          list-style: none;
        }
        span {
          font-family: 'Rubik Mono One', sans-serif;
          font-size: .8em;
        }
        `}
      </style>
      <ul>
        <li><span>Question:</span><br/> {props.question}</li>
        <li><span>Your Current Answer:</span><br/> {props.answer}</li>
        <p>-</p>
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
};

export default Question;
