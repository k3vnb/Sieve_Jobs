import React from 'react';
import PropTypes from 'prop-types';

function FlashcardBack(props){
  return (
    <div>
      <h1>Hello</h1>
      <h2>Flashcard Back</h2>
    </div>
  );
}

FlashcardBack.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  questionId: PropTypes.string.isRequired
};

export default FlashcardBack;
