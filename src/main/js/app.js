const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder';
import PostForm from './posts/postForm';
import SignUpForm from './users/signup';


class App extends React.Component {

  render() {
    return (
      <div>
        {/* <PostForm />
        <PostsBuilder /> */}
        <SignUpForm />

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
