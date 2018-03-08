import React from 'react';
import PropTypes from 'prop-types';

function Question(props){
  const wrapper = {
    height: '90vh'
  }
  return (
    <div onClick={() => {props.onQuestionSelection(props.questionId);}}><style jsx>{`
        ul {
          list-style: none;
        }
      `}</style>
      <ul>
        <li><strong>Question:</strong> {props.question}</li>
        <li><strong>Your Current Answer:</strong> {props.answer}</li>
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
