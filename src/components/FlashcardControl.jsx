import React from 'react';
import PropTypes from 'prop-types';

class FlashcardControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersVisibleOnPage: false,
      randomCard: Math.floor((Math.random() * 14) + 1)
    };
    this.handleFlashcardToggle = this.handleFlashcardToggle.bind(this);
    this.handleNewFlashcard = this.handleNewFlashcard.bind(this);
  }

  handleFlashcardToggle(){
    if (this.state.answersVisibleOnPage){
      this.setState({answersVisibleOnPage: false});
    } else {
      this.setState({answersVisibleOnPage: true});
    }
  }

  handleNewFlashcard(){
    let x = Math.floor((Math.random() * 14) + 1);
    this.setState({randomCard: x});
    this.setState({answersVisibleOnPage: false});
  }

  render() {
    const cardContainer = {
      height: '20vh',
      border: '1px solid black',
      backgroundColor: 'lightblue',
      padding: '2%',
      margin: '5%',
      position: 'relative'
    };
    console.log(this.state.randomCard);
    console.log(this.props.infoCard[1].title);


    let currentlyVisibleContent = null;
    let currentInfoCard = null;
    if (!this.state.answersVisibleOnPage) {
      currentlyVisibleContent = null;
    } else {
      currentlyVisibleContent = <h5>{this.props.questionList[this.state.randomCard].answer}</h5>;
      if (this.props.questionList[this.state.randomCard].type === 'a'){
        currentInfoCard = this.props.infoCard[1].title;
      } else if (this.props.questionList[this.state.randomCard].type === 'b'){
        currentInfoCard = this.props.infoCard[2].title;
      } else if (this.props.questionList[this.state.randomCard].type === 'c'){
        currentInfoCard = this.props.infoCard[3].title;
      }
    }

    return(
      <div>
        <div style={cardContainer} onClick={this.handleFlashcardToggle}>
          <style jsx>{`
              .clickme {
                font-size: 10px;
                position: absolute;
                bottom: 0;
                right: 1%;
                color: red;
              }`}</style>
          <h4>{this.props.questionList[this.state.randomCard].question}</h4>
          {currentlyVisibleContent}
          {currentInfoCard}
          <p className="clickme">Click anywhere to flip the card</p>
        </div>
        <button onClick={this.handleNewFlashcard}>Click here to go to next flashcard</button>
      </div>
    );
  }
}


FlashcardControl.propTypes = {
  questionList: PropTypes.object,
  infoCard: PropTypes.object
};

export default FlashcardControl;
