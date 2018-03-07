import React from 'react';
import PropTypes from 'prop-types';
function QuestionDetail(props){
  return(
    <div>
      <h3>{props.thisSelectedQuestion.question}</h3>
    </div>
  );
}

QuestionDetail.propTypes = {
  thisSelectedQuestion: PropTypes.object
}



export default QuestionDetail;
