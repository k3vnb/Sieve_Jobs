import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import NewEntryForm from './NewEntryForm';
import LandingPage from './LandingPage';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}



export default App;
