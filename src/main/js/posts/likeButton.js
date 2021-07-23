import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const client = require('../client');

export default function LikeButton(props) {

  const [likeState, setLikeState] = React.useState(false);

  const handleLikes = () => {
    setLikeState(!likeState)
    let idPost = props.idPost.split("/");
    let idPostElem = idPost[5];

    if (likeState === true) {
      const updatedPost = {
        content: props.postData.content,
        user_id: props.postData.user_id,
        date: props.postData.date,
        likes: props.postData.likes - 1,
      };

      client({ method: 'PUT', path: `/api/posts/${idPostElem}`, entity: updatedPost }).then(response => {
        props.refreshPostsBuilder();
      });
    } else {
      const updatedPost = {
        content: props.postData.content,
        user_id: props.postData.user_id,
        date: props.postData.date,
        likes: props.postData.likes + 1,
      };

      client({ method: 'PUT', path: `/api/posts/${idPostElem}`, entity: updatedPost }).then(response => {
        props.refreshPostsBuilder();
      });
    }

  }


  return (
    <IconButton aria-label="add to favorites" onClick={handleLikes}>
      {likeState === false ? (<FavoriteBorderIcon />) : (<FavoriteIcon />)}
    </IconButton>
  );
}
