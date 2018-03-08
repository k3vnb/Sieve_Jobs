import React from 'react';
import skinnylogo from './../assets/logo-slim.png'
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
      minHeight: '20vh',
      border: '10px solid #2fe6d8',
      padding: '2%',
      margin: '5%',
      position: 'relative'
    };
    const nextButton = {
      width: '100%',
      height: 50,
      fontFamily: 'Comfortaa, cursive',
      fontSize: 20,
      backgroundColor: '#1fb5a9',
      border: '1px solid black'
    }
    const metaTopic = {
      backgroundColor: '#ff9bd4',
      padding: '2%',
      paddingLeft: '4%',
      fontFamily: 'Didact Gothic, sans-serif',
      fontSize: '.8em',
      marginBottom: 10
    }
    const yourAnswer = {
      padding: '1%',
      paddingRight: '4%',
      fontFamily: 'Didact Gothic, sans-serif',
      textAlign: 'justify'
    }
    const page = {
      marginBottom: '80px'
    }


    let currentlyVisibleContent = null;
    let currentInfoCard = null;
    let logoSlim = <img src={skinnylogo} alt='logo'/>
    if (!this.state.answersVisibleOnPage) {
      currentlyVisibleContent = null;
    } else {
      currentlyVisibleContent =
      <div style={yourAnswer}><h3>Your Answer:</h3> <p>{this.props.questionList[this.state.randomCard].answer}</p></div> ;
        if (this.props.questionList[this.state.randomCard].type === 'a'){
          currentInfoCard = <div><div style={metaTopic}><p>Meta-Topic: {this.props.infoCard[1].title}</p> <p>Focus on: {this.props.infoCard[1].questionSet}</p>
        </div>{logoSlim}</div>;
      } else if (this.props.questionList[this.state.randomCard].type === 'b'){
        currentInfoCard = <div><div style={metaTopic}><p>Meta-Topic: {this.props.infoCard[2].title}</p> <p>Focus on: {this.props.infoCard[2].questionSet}</p>
      </div>{logoSlim}</div>;
    } else if (this.props.questionList[this.state.randomCard].type === 'c'){
      currentInfoCard = <div><div style={metaTopic}><p>Meta-Topic: {this.props.infoCard[3].title}</p> <p>Focus on: {this.props.infoCard[3].questionSet}</p>
    </div>{logoSlim}</div>;
  }
}

return(
  <div style={page}>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa|Didact+Gothic|Ropa+Sans|Rubik+Mono+One" rel="stylesheet" />
    <div style={cardContainer} ref='button' className={fade ? 'fade' : ''}
      onClick={this.handleFlashcardToggle}>
      <style jsx>{`
          .clickme {
            font-size: 12px;
            position: absolute;
            font-family: 'Didact Gothic', sans-serif;
            top: 0;
            right: 1%;
            color: red;
          }
          .cardWrapper h4 {
            text-align: center;
            font-family: 'Ropa Sans', sans-serif;
            font-weight: lighter;
            font-size: 1.3em;
            text-shadow: .5px .5px #027068;
          }
          .answerWrapper {
            display: flex;
          }
          .infocard {
            width: 30%;
          }
          .answer {
            width: 69%;
          }
          .fade {
            animation: flip .3s, small .4s, fade-in-keyframes .3s;
          }
          .slide {
            animation: flipY .5s ease-out;
          }
          @keyframes fade-in-keyframes {
            from {background-color: #a9dcd8}
            to {background-color: white}
          }
          @keyframes flip {
            from {transform: rotateX(0deg)}
            to {transform: rotateX(360deg)}
          }
          @keyframes flipY {
            from {transform: rotateY(0deg)}
            to {transform: rotateY(360deg)}
          }
          @keyframes small {
            from {box-shadow: 6px 15px 15px #000000ab}
            to {box-shadow: 0px .5px .5px #000000ab}
          }`}</style>
          <div className='cardWrapper'>
            <h4 className={slide ? 'slide' : ''}>{this.props.questionList[this.state.randomCard].question}</h4>
            <div className="answerWrapper">
              <div className="answer">
                {currentlyVisibleContent}
              </div>
              <div className="infocard">
                {currentInfoCard}
              </div>
            </div>
            <p className="clickme">Click anywhere to flip the card</p>
          </div>
        </div>
        <button style={nextButton} onClick={this.handleNewFlashcard} ref='nextbutton'>Click here to go to next flashcard</button>
      </div>
    );
  }
}


FlashcardControl.propTypes = {
  questionList: PropTypes.object,
  infoCard: PropTypes.object
};

export default FlashcardControl;
