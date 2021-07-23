import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpForm from './users/signup';
import Feed from './feed2';

export default function AppRouter() {
  return (
      <Router>
          <Switch>
              <Route path='/' exact component={() => (<Feed></Feed>)}></Route>
              <Route path='/signup' exact component={SignUpForm}></Route>
          </Switch>
      </Router>
  );
}
