import React, {useState} from 'react';
const client = require('../client');
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import location from 'rest/interceptor/location';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));


export default function PostForm() {
  const [postContent, setPostContent] = useState("");

  function submitPost(){
    console.log(postContent);
    const newPost = {
      content: postContent,
      user_id: 1,
      likes: 0,
      date: new Date()
    };
    client({method: 'POST', path: '/api/posts', entity: newPost}).then(response => {
      console.log(response);
      window.location.reload(true);
    });
    
  }
  
  function handleSubmitPost(event){
    submitPost();
    
  }
  
  function handlePostContent(event) {
          setPostContent(event.target.value);
      }

  const classes = useStyles();
  return (
    <Grid item xs={12} md={8} lg={9}>
      <Paper className={classes.paper}>
        <TextField
          id="outlined-multiline-static post-form"
          label="Write something..."
          multiline
          rows={4}
          variant="outlined"
          onChange = {handlePostContent}
        />
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          size="medium"
          onClick = {handleSubmitPost}
        >
          Post
        </Button>
      </Paper>
    </Grid>
  );
}
