import React from 'react';
import Posts from './posts'
const client = require('../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: [], refresh: false};
    this.refreshPostsBuilder = this.refreshPostsBuilder.bind(this);
  }

  refreshPostsBuilder() {
    console.log("hello db 2");
    this.setState({
      refresh: true,
    });
  }

  componentDidMount() {
    console.log("hello db");
    client({method: 'GET', path: '/api/posts'}).then(response => {
      this.setState({posts: response.entity._embedded.posts});
    });
  }

  componentDidUpdate() {
    if (this.state.refresh === true) {
      console.log("hello db 3");
      client({method: 'GET', path: '/api/posts'}).then(response => {
        this.setState({posts: response.entity._embedded.posts});
      });
      this.setState({
        refresh: false,
      });
    }
    
  }

	render() {
		return (
      <Posts posts={this.state.posts} refreshPostsBuilder={this.refreshPostsBuilder}/>
		)
	}
}

export default PostsBuilder;
