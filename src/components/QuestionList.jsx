import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

function QuestionList(props){
  return(
    <div>
      {Object.keys(props.questionList).map(function(questionId) {
          let thisQuestion = props.questionList[questionId];
          return <div><Question
            question={thisQuestion.question}
            answer={thisQuestion.answer}
            key={questionId}
            questionId={questionId}
            onQuestionSelection={props.onQuestionSelection}
          /></div>;
        })}
    </div>

  );
}

Question.propTypes = {
  questionList: PropTypes.object,
  onQuestionSelection: PropTypes.func
}

export default QuestionList;
