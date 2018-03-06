import React from 'react';
import PropTypes from 'prop-types';




function EditForm(props){
  let _answer = null
  function handleAddingNewAnswerToQuestionList(event){
    event.preventDefault();
    props.onNewAnswerAddition({answer: _answer.value});
    console.log("hello");
    console.log(_answer.value);
    _answer.value = '';
  }
  return (
    <div>
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
  onNewAnswerAddition: PropTypes.func
};

export default EditForm;
