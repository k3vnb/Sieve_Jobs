import React from 'react';

class FlashcardControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersVisibleOnPage: false
    };
    this.handleFlashcardToggle = this.handleFlashcardToggle.bind(this);
  }

  handleFlashcardToggle(){
    if (this.state.answersVisibleOnPage){
      this.setState({answersVisibleOnPage: false})
    } else {
      this.setState({answersVisibleOnPage: true})
    }
    console.log('click');
  }
  render() {
    let currentlyVisibleContent = null;
    if (!this.state.answersVisibleOnPage) {
      currentlyVisibleContent = <div>
        <h1>Topic (Flashcard Frontside)</h1>
      </div>
    } else {
      currentlyVisibleContent = <div>
        <h1>Topic (Flashcard Frontside)</h1>
          <div>
            <h4>Flashcard back side (will re-render static card info & user input info)</h4>
          </div>
      </div>
    }
    return(
      <div>
        {currentlyVisibleContent}
        <button onClick={this.handleFlashcardToggle}>Flip the card</button><hr/>
        <button>Click here to go to next flashcard</button>
      </div>
    );
  }
}


export default FlashcardControl;

//At this point, just a functional component, it will be refactored to contain state and display flashcard components (front & backside info based on re-usable card info & user-input)

//I believe I will use conditional rendering with a toggle event, if boolean value is true it will render the front of the card, if false it will render the back.
