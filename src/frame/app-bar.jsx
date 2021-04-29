import { AppBar, IconButton, makeStyles, Toolbar, Typography, Button } from "@material-ui/core";
import {
  Menu as MenuIcon
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12
  }
})

export default function () {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          aria-label="Menu"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Button color="inherit" component={Link} to='/home' >Home</Button>
        <Button color="inherit" component={Link} to='/about' >About</Button>
      </Toolbar>
    </AppBar>
  )
}