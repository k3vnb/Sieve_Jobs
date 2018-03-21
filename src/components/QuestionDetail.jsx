import React from 'react';
import PropTypes from 'prop-types';

function QuestionDetail(props){
  return(
    <div>
      <style jsx>
        {`
        h3 {
          width: 300px;
        }`}
      </style>
      <h3>{props.thisSelectedQuestion.question}</h3>
    </div>
  );
}

QuestionDetail.propTypes = {
  thisSelectedQuestion: PropTypes.object
};



export default QuestionDetail;
