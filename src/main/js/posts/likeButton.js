import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const client = require('../client');

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 500,
    // backgroundColor: theme.palette.background.paper
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    color: "pink"
  },
  avatar: {
    backgroundColor: red[500]
  },
  mar: {
    marginRight: 15,
    marginLeft: 2
  }
}));

export default function LikeButton(props) {
  const classes = useStyles();

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
