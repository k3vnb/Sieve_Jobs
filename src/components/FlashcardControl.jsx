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
    this.fadingDone = this.fadingDone.bind(this)
    this.handleFlashcardToggle = this.handleFlashcardToggle.bind(this);
    this.handleNewFlashcard = this.handleNewFlashcard.bind(this);
  }

  componentDidMount () {
    const elm = this.refs.button
    elm.addEventListener('animationend', this.fadingDone)
  }
  componentWillUnmount () {
    const elm = this.refs.button
    elm.removeEventListener('animationend', this.fadingDone)
  }
  fadingDone () {
    // will re-render component, removing the animation class
    this.setState({fade: false})
  }

  handleFlashcardToggle(){
    if (this.state.answersVisibleOnPage){
      this.setState({answersVisibleOnPage: false});
    } else {
      this.setState({answersVisibleOnPage: true});
    }
    this.setState({fade: true})
  }

  handleNewFlashcard(){
    let x = Math.floor((Math.random() * 14) + 1);
    this.setState({randomCard: x});
    this.setState({answersVisibleOnPage: false});
  }

  render() {
    const fade = this.state.fade;
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
                animation: fade-in-keyframes 1s;
              }
              @keyframes fade-in-keyframes {
                from {opacity: 0}
                to {opacity: 1}
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

class ClickMe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.fade = false
    this.fadingDone = this.fadingDone.bind(this)
  }
  componentDidMount () {
    const elm = this.refs.button
    elm.addEventListener('animationend', this.fadingDone)
  }
  componentWillUnmount () {
    const elm = this.refs.button
    elm.removeEventListener('animationend', this.fadingDone)
  }
  fadingDone () {
    // will re-render component, removing the animation class
    this.setState({fade: false})
  }
  render () {
    const fade = this.state.fade

    return (
      <button
        ref='button'
        onClick={() => this.setState({fade: true})}
        className={fade ? 'fade' : ''}>
          Click me!
      </button>
    )
  }
}
