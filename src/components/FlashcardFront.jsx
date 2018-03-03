import React from 'react';
import PropTypes from 'prop-types';

function FlashcardFront(props){
  return (
    <div>
      <h1>Hello Flashcard Front</h1>
    </div>
  );
}

FlashcardFront.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  questionId: PropTypes.string.isRequired
};

export default FlashcardFront;
