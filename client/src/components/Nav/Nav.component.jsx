import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import AppContext from "../../contexts/AppContext";

const useStyles = makeStyles((theme) => ({
  nav: {
    justifyContent: "space-between",
  },
}));

const Nav = (props) => {
  const { children } = props;
  const classes = useStyles();
  const appContext = useContext(AppContext);

  const switchModeDestination = appContext.mode === "gifter" ? "/login" : "/";

  const modeToggler = () => {
    appContext.setMode((appContext.mode === "gifter" && "owner") || (appContext.mode === "owner" && "gifter"));
  };

  const signOut = () => {
    // TODO signout function
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.nav}>
        <Button color="inherit" component={Link} to={switchModeDestination} onClick={modeToggler}>
          Switch Mode
        </Button>
        {children && children}
        <span>
          <Avatar alt={appContext.ownerName} src={appContext.ownerAvatar} />
          {appContext.mode === "owner" && (
            <Button color="inherit" component={Link} to="/" onClick={signOut} className={classes.navItem}>
              Sign Out
            </Button>
          )}
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
