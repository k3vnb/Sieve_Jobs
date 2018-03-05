import React from 'react';
import FlashcardFront from './FlashcardFront';
import FlashcardBack from './FlashcardBack';
import PropTypes from 'prop-types';

class FlashcardControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersVisibleOnPage: false,
      randomCard: Math.floor((Math.random() * 3) + 1)
    };
    this.handleFlashcardToggle = this.handleFlashcardToggle.bind(this);
    this.handleNewFlashcard = this.handleNewFlashcard.bind(this);
  }

  handleFlashcardToggle(){
    if (this.state.answersVisibleOnPage){
      this.setState({answersVisibleOnPage: false});
    } else {
      this.setState({answersVisibleOnPage: true})
    }
  }

  handleNewFlashcard(){
    let x = Math.floor((Math.random() * 3) + 1);
    this.setState({randomCard: x})
  }

  render() {
    console.log(this.state.randomCard);
    let currentlyVisibleContent = null;
    if (!this.state.answersVisibleOnPage) {
      currentlyVisibleContent = null;
    } else {
      currentlyVisibleContent = <h5>{this.props.questionList[this.state.randomCard].a.answer}</h5>

    }
    return(
      <div>
        <h4>{this.props.questionList[this.state.randomCard].a.question}</h4>
        {currentlyVisibleContent}
        <button onClick={this.handleFlashcardToggle}>Flip the card</button><hr/>
        <button onClick={this.handleNewFlashcard}>Click here to go to next flashcard</button>
      </div>
    );
  }
}


FlashcardControl.propTypes = {
  questionList: PropTypes.object
};

export default FlashcardControl;

//At this point, just a functional component, it will be refactored to contain state and display flashcard components (front & backside info based on re-usable card info & user-input)

//I believe I will use conditional rendering with a toggle event, if boolean value is true it will render the front of the card, if false it will render the back.
