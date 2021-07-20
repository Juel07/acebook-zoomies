import React from 'react';
import Post from './post'
import List from "@material-ui/core/List";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
  }

  render() {
    return (
      <List>
        {this.getPosts().reverse()}
      </List>
    )
  }

  getPosts() {
    return this.props.posts.map(post =>
      <Post key={post._links.self.href} post={post} />
    );
  }
}

export default Posts;
