import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <Switch>
      // <Route exact path='/' component={Default} />
      <Route component={Error404} />
    </Switch>
  );
}



export default App;
