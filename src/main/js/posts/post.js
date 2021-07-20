import React from 'react';

const Post = (props) => {

	return (
		<div className='post-main'>
			<div className='post-content'>
				<div className='date'>{new Date(props.post.date).toDateString()}</div>
				<div className='content'>{props.post.content}</div>
				<div className='likes'>{props.post.likes}</div>
			</div>
		</div>
	)
}

export default Post;




// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
// import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
// import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%" // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     })
//   },
//   expandOpen: {
//     color: "pink"
//   },
//   avatar: {
//     backgroundColor: red[500]
//   }
// }));

// export default function Post(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="user name" className={classes.avatar}>
//             JD
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <DeleteOutlineOutlinedIcon />
//           </IconButton>
//         }
//         title="John Doe"
//         subheader="August 9, 2021"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Hello, how is everyone?
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="like">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton
//           aria-label="comment"
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//         >
//           <ChatBubbleOutlineOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <ShareOutlinedIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Title</Typography>
//           <Typography paragraph>Lorem Ipsum</Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
