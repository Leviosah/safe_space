import React from 'react';
import EntryContent from './EntryContent';
import PublicFeed from './PublicFeed';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "-40px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: "5%",
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} id = "feedgrid">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} id ="entryy">
          <Paper className={classes.paper}>
            <EntryContent track={props.trackfeed.setval}></EntryContent>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}  id = "publicgrid">
          <Paper className={classes.paper}><PublicFeed track={props.trackfeed.val}></PublicFeed></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
