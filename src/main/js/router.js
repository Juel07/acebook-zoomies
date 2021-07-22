import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsBuilder from './posts/postsBuilder';
import PostForm from './posts/postForm';
import SignUpForm from './users/signup';
import Navigation from './navigation';

export default function AppRouter() {
  return (
      <Router>
          <Navigation />
          <Switch>
              <Route path='/' exact component={() => (<div><PostForm /> <PostsBuilder /></div>)}></Route>
              <Route path='/signup' exact component={SignUpForm}></Route>
          </Switch>
      </Router>
  );
}
