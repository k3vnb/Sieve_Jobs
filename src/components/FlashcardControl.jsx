import React from 'react';
import PropTypes from 'prop-types';

class FlashcardControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersVisibleOnPage: false,
      randomCard: Math.floor((Math.random() * 14) + 1)
    };
    this.state.fade = false;
    this.state.slide = false;
    this.animationDone = this.animationDone.bind(this);
    this.handleFlashcardToggle = this.handleFlashcardToggle.bind(this);
    this.handleNewFlashcard = this.handleNewFlashcard.bind(this);
  }

  componentDidMount () {
    this.refs.button.addEventListener('animationend', this.animationDone);
    this.refs.nextbutton.addEventListener('animationend', this.slidingDone);
  }
  componentWillUnmount () {


    this.refs.button.removeEventListener('animationend', this.animationDone);
    this.refs.nextbutton.removeEventListener('animationend', this.slidingDone);

  }
  animationDone() {
    console.log("animationDOne");
    this.setState({fade: false})
    this.setState({slide: false})
  }


  handleFlashcardToggle(){
    this.setState({fade: true})
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
    console.log(this.state.slide);
    this.setState({slide: true});
  }

  render() {
    const fade = this.state.fade;
    const slide = this.state.slide;
    const cardContainer = {
      height: '20vh',
      border: '1px solid black',
      backgroundColor: 'lightblue',
      padding: '2%',
      margin: '5%',
      position: 'relative'
    };
    console.log(this.state.randomCard);



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
        <div style={cardContainer} ref='button' className={fade ? 'fade' : ''}
        onClick={this.handleFlashcardToggle}>
          <style jsx>{`
              .clickme {
                font-size: 10px;
                position: absolute;
                bottom: 0;
                right: 1%;
                color: red;
              }
              .fade {
                animation: flip .3s, small .3s, fade-in-keyframes .3s;
              }
              .slide {
                animation: flipY .5s;
              }
              @keyframes fade-in-keyframes {
                from {background-color: #6cf3f3}
                to {background-color: #7d9ca76b}
              }
              @keyframes flip {
                from {transform: rotate(0deg)}
                to {transform: rotate(360deg)}
              }
              @keyframes flipY {
                from {transform: rotateY(0deg)}
                to {transform: rotateY(720deg)}
              }
              @keyframes small {
                from {box-shadow: 15px 15px 15px black}
                to {box-shadow: .5px .5px .5px black}
              }`}</style>
            <div>
            </div>
          <h4 className={slide ? 'slide' : ''}>{this.props.questionList[this.state.randomCard].question}</h4>
          {currentlyVisibleContent}
          {currentInfoCard}
          <p className="clickme">Click anywhere to flip the card</p>
        </div>
        <button onClick={this.handleNewFlashcard} ref='nextbutton'>Click here to go to next flashcard</button>
      </div>
    );
  }
}


FlashcardControl.propTypes = {
  questionList: PropTypes.object,
  infoCard: PropTypes.object
};

export default FlashcardControl;
