import React, { useState } from 'react';
const client = require('../client');
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import location from 'rest/interceptor/location';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 500,
    margin: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  mar: {
    marginBottom: 10,
  },
  button: {
    alignSelf: "flex-end"
  }
}));


export default function PostForm() {
  const [postContent, setPostContent] = useState("");

  function submitPost() {
    console.log(postContent);
    const newPost = {
      content: postContent,
      user_id: 1,
      likes: 0,
      date: new Date()
    };
    client({ method: 'POST', path: '/api/posts', entity: newPost }).then(response => {
      window.location.reload(true);
    });

  }

  function handleSubmitPost(event) {
    submitPost();
  }

  function handlePostContent(event) {
    setPostContent(event.target.value);
  }

  const classes = useStyles();
  return (
    <Grid xs={12} className={classes.root} spacing={2}>
      <Paper className={classes.paper}>
        <TextField
          id="outlined-multiline-static post-form"
          label="Write something..."
          multiline
          rows={4}
          variant="outlined"
          onChange={handlePostContent}
          className={classes.mar}
        />
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          size="medium"
          onClick={handleSubmitPost}
        >
          Post
        </Button>
      </Paper>
    </Grid>
  );
}
