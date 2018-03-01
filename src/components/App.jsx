import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';

function App(){
  return (
    <Switch>
      <Header />
      <Route component={Error404} />
    </Switch>
  );
}



export default App;
