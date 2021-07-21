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
        {this.getPosts()}
      </List>
    )
  }

  getPosts() {
    let sortedPosts = this.props.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedPosts.map(post =>
      <Post
        key={post._links.self.href}
        post={post}
        idPost={post._links.self.href}
        refreshPostsBuilder={this.props.refreshPostsBuilder}
      />
    );
  }
}

export default Posts;
