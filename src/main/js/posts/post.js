import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareIcon from "@material-ui/icons/Share";
import DeleteButton from "./deleteButton";
import LikeButton from "./likeButton";

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

export default function Post(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formatDate = (utcDate) => {
    let dbDate = new Date(utcDate).toString();
    let dbDateToGMT = new Date(`${dbDate} GMT`).toString();
    let arr = dbDateToGMT.split(' GMT');
    let formattedDate = arr[0];
    return formattedDate;
  }

  return (
    <ListItem>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="user name" className={classes.avatar}>
              JD
            </Avatar>
          }
          action={
            <DeleteButton postData={props.post} idPost={props.idPost} refreshPostsBuilder={props.refreshPostsBuilder} />
          }
          title="John Doe"
          subheader={formatDate(props.post.date)}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.post.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <LikeButton postData={props.post} idPost={props.idPost} refreshPostsBuilder={props.refreshPostsBuilder} />
          <Typography
            className={classes.mar}
            variant="body2"
            display="block"
            color="textSecondary"
          >
            {props.post.likes}
          </Typography>
          <IconButton
            aria-label="comment"
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ChatBubbleOutlineOutlinedIcon />
          </IconButton>
          <Typography
            className={classes.mar}
            onClick={handleExpandClick}
            variant="body2"
            display="block"
            color="textSecondary"
          >
            0
          </Typography>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This could be a comment card
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ListItem>
  );
}
