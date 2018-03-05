import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import NewEntryForm from './NewEntryForm';
import LandingPage from './LandingPage';
import TutorialStaticInfoCards from './TutorialStaticInfoCards';
import TutorialControl from './TutorialControl';
import FlashcardControl from './FlashcardControl';
import Footer from './Footer';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questionList: {
        '1': {
          question: 'Tell me about yourself',
          answer: 'I am a student of web development, looking to break into the web development industry.',
          type: 'a'
        },
        '2': {
            question: 'What is your biggest weakness?',
            answer: "My biggest weakness is...",
            type: 'b'
        },
        '3': {
          question: 'How did you find out about our company?',
          answer: "I heard about you through...",
          type: 'c'
        },
        '4': {
          question: 'Why should we hire you?',
          answer: "I am a strong candidate because...",
          type: 'c'
        },
        '5': {
          question: 'Tell about a time...',
          answer: "Once upon a time...",
          type: 'a'
        },
        '6': {
          question: 'Tell me about a problem you had at a previous job and how you solved it',
          answer: "When I was at ...",
          type: 'b'
        }
      },
      infoCard: {
        '1': {
          title: 'Your Work History',
          questionSet: 'a, b, c, d'
        },
        '2': {
          title: 'Your Skills',
          questionSet: 'x, y, z'
        },
        '3': {
          title: 'Our Company & Your Fit',
          questionSet: 'apple, banana, orange'
        }
      }
    }
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/tutorial' component={TutorialStaticInfoCards} />
          <Route path='/tutorial/page2' component={TutorialControl} />
          <Route path='/flashcards' render={()=><FlashcardControl questionList={this.state.questionList}
          infoCard={this.state.infoCard} />} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}



export default App;
