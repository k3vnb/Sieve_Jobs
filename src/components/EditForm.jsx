import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';


function EditForm(props){
  let _answer = null;
  function handleAddingNewAnswerToQuestionList(event){
    event.preventDefault();
    props.onNewAnswerAddition( _answer.value);
    console.log("hello");
    console.log(_answer.value);
    _answer.value = '';
  }
  return (
    <div>
      <h2>Choose a question to Edit</h2>
      <QuestionList questionList={props.questionList}
      onQuestionSelection={props.onQuestionSelection}/>
      <h1>Edit Form</h1>
      <QuestionDetail thisSelectedQuestion={props.questionList[props.selectedQuestion]}/>
        <form onSubmit={handleAddingNewAnswerToQuestionList}>
          <textarea
            id='question'
            placeholder='Answer.'
            ref={(textarea) => {_answer = textarea;}}/>
          <button type='submit'>Hello</button>
        </form>
    </div>
  );
}

EditForm.propTypes = {
  onNewAnswerAddition: PropTypes.func,
  questionList: PropTypes.object,
  onQuestionSelection: PropTypes.func,
  selectedQuestion: PropTypes.string
};

export default EditForm;
