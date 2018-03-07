import React from 'react';
import PropTypes from 'prop-types';

function TutorialA(props){
  let currentlyVisibleContent = null;
  let arr = [];
  for (let i=1; i < 15; i++){
    if (props.questionList[i].type === 'a'){
      console.log(props.questionList[i].question);
      arr.push(props.questionList[i].question);
      console.log(arr);
      currentlyVisibleContent = <li>{props.questionList[i].question}</li>
    }
  }
  return(
    <div>{currentlyVisibleContent}</div>
  );
}

TutorialA.propTypes = {
  questionList: PropTypes.object
}

export default TutorialA;
