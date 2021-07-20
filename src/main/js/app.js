const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder';
import PostForm from './posts/postForm';

class App extends React.Component {

  render() {
    return (
      <div>
        <PostForm />
        <PostsBuilder />
      </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
