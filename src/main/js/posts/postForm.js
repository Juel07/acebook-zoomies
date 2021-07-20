import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));

export default function PostForm() {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8} lg={9}>
      <Paper className={classes.paper}>
        <TextField
          id="outlined-multiline-static"
          label="Write something..."
          multiline
          rows={4}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          size="medium"
        >
          Post
        </Button>
      </Paper>
    </Grid>
  );
}
