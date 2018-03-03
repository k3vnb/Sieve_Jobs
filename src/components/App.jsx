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
          a: {
            question: 'Tell me about yourself',
            answer: null,
          },
          b: {
            question: 'Tell about a time...',
            answer: null
          }
        },
        '2': {
          a: {
            question: 'What is your biggest weakness?',
            answer: null
          },
          b: {
            question: 'Tell me about a problem you had at a previous job and how you solved it',
            answer: null
          }
        },
        '3': {
          a: {
            question: 'How did you find out about our company?',
            answer: null
          },
          b: {
            question: 'Why should we hire you?',
            answer: null
          }
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
          <Route path='/flashcards' render={()=><FlashcardControl questionList={this.state.questionList} />} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}



export default App;
