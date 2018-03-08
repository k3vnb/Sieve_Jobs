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
  const questDetail = {
    width: '200px'
  }
  const page = {
    marginBottom: 65
  }
  return (
    <div style={page}>
      <link href="https://fonts.googleapis.com/css?family=Didact+Gothic" rel="stylesheet" />
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-around;
          width: 100%;
          font-family: 'Didact Gothic', sans-serif;
        }
        form {
          width: 100%;
        }
        textarea {
          width: 100%;
          height: 50vh;
        }
        .questions {
          width: 35%;
          padding-left: 5%;
        }
        .btn {
          width: 100%;
          height: 50px;
          background-color: #1fb5a9;
          color: white;
          font-size: 1.1em;
          margin-left: 1%;
        }
        .btn:hover {
          background-color: #c5e2c9;
          color: #1fb5a9;
          box-shadow: 1px 1px 1px black;
        }
          `}</style>
      <div className="container">
        <div>
          <h1>Edit Form</h1>
          <QuestionDetail style={questDetail} thisSelectedQuestion={props.questionList[props.selectedQuestion]}/>
          <form onSubmit={handleAddingNewAnswerToQuestionList}>
            <textarea
              id='question'
              placeholder='Type Your Answer.'
              ref={(textarea) => {_answer = textarea;}}/>
            <button className="btn" type='submit'>Submit</button>
          </form>
        </div>
        <div className="questions">
          <h2>Choose a question to Edit</h2>
          <QuestionList questionList={props.questionList}
            onQuestionSelection={props.onQuestionSelection}/>
        </div>
      </div>
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
