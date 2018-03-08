import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

function QuestionList(props){
  const wrapper = {
    height: '65vh',
    overflow: 'scroll',
    border: '.5px solid black',
    boxShadow: '-5px -5px 50px #2cbf077a inset',
    backgroundColor: '#8ce28fde',
    paddingRight: '4%'
  };
  return(
    <div style={wrapper}>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      <style jsx>{`
          .questionItem {
          font-family: 'Open Sans', sans-serif;
          }
        .questionItem:hover {
          color: blue;
          cursor: pointer;
        }`}</style>
      {Object.keys(props.questionList).map(function(questionId) {
        let thisQuestion = props.questionList[questionId];
        return <div className="questionItem"><Question
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
};

export default QuestionList;
