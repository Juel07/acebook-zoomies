import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsBuilder from './posts/postsBuilder';
import PostForm from './posts/postForm';
import SignUpForm from './users/signup';

export default function AppRouter() {
  return (
      <Router>
          {/* <Navigation loggedIn={loggedIn} userId={userId}/> */}
          <Switch>
              <Route path='/' exact component={() => (<div><PostForm /> <PostsBuilder /></div>)}></Route>
              <Route path='/signup' exact component={SignUpForm}></Route>
          </Switch>
          {/* <Footer loggedIn={loggedIn} userId={userId}/> */}
      </Router>
  );
}
