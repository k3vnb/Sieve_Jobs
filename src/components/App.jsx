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

    }
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/tutorial' component={TutorialStaticInfoCards} />
          <Route exact path='/tutorial/page2' component={TutorialControl} />
          <Route exact path='/flashcards' component={FlashcardControl} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );  
  }
}



export default App;
