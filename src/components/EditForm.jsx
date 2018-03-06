import React from 'react';
import PropTypes from 'prop-types';


// function handleAddingNewAnswerToQuestionList(event){
//   event.preventDefault();
//   console.log("hello");
// }


function EditForm(props){
  return (
    <div>
      <h1>Edit Form</h1>
      <button onClick={props.onNewAnswerAddition}>Hello</button>
    </div>
  );
}

EditForm.propTypes = {
  onNewAnswerAddition: PropTypes.func
};

export default EditForm;
