import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';




function EditForm(props){
  let _answer = null
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
  onQuestionSelection: PropTypes.func
};

export default EditForm;
