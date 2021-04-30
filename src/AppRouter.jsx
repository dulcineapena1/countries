import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/continents/:continent(Africa|Asia|Americas|Europe|Oceania)' component={App}/>
        <Route render={() => <Redirect to='/continents/Africa' />}/>
      </Switch>
    </ BrowserRouter>
  )
}

export default AppRouter;
