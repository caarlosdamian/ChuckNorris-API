import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import useStyles from '../styles/Header-styles'
import MenuIcon from "@material-ui/icons/Menu";

import React from "react";

function Header() {

  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Chuck Norris API
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
