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
    console.log("Hello Like!");

    console.log(props.idPost);
    let idPost = props.idPost.split("/");
    console.log(idPost);
    let idPostElem = idPost[5];
    console.log(idPost);
    console.log(idPostElem);
    
    if (likeState === true) {
      const newLike = {
        content: props.postData.content,
        user_id: props.postData.user_id,
        date: props.postData.date,
        likes: props.postData.likes - 1,
      };

      client({ method: 'PUT', path: `/api/posts/${idPostElem}`, entity: newLike }).then(response => {
          // console.log(response);
          // window.location.reload(true);
          props.refreshPostsBuilder();
        });
    } else {
      const newLike = {
        content: props.postData.content,
        user_id: props.postData.user_id,
        date: props.postData.date,
        likes: props.postData.likes + 1,
      };

      client({ method: 'PUT', path: `/api/posts/${idPostElem}`, entity: newLike }).then(response => {
          // console.log(response);
          // window.location.reload(true);
          props.refreshPostsBuilder();
        });
    }

  }


	return (
		<div>
					<IconButton aria-label="add to favorites" onClick={handleLikes}>
            {likeState === false ? (<FavoriteBorderIcon />) : (<FavoriteIcon />)}
						
					</IconButton>
					<Typography
						className={classes.mar}
						variant="body2"
						display="block"
						color="textSecondary"
					>
						{props.postData.likes}
					</Typography>
				</div>
	);
}
