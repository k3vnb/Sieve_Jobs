import React from 'react';

function FlashcardControl(){
  return(
    <div>
      <div>
        <h1>Topic (Flashcard Frontside)</h1>
      </div>
      <div>
        <h4>Flashcard back side (will re-render static card info & user input info)</h4>
      </div>
    </div>
  );
}


export default FlashcardControl;

//At this point, just a functional component, it will be refactored to contain state and display flashcard components (front & backside info based on re-usable card info & user-input)
