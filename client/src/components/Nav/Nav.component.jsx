import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import AppContext from "../../contexts/AppContext";

import "./nav.css";
import SignIn from "../SignIn/SignIn.component";
import functions from "../../functions/functions";

const useStyles = makeStyles((theme) => ({
  nav: {
    justifyContent: "space-between",
  },
}));

const Nav = (props) => {
  const { children } = props;
  const classes = useStyles();
  const appContext = useContext(AppContext);

  const signOut = () => {
    appContext.setUserId(null);
    appContext.setUserAvatar(null);
    appContext.setUserName(null);
    appContext.setUserFirstName(null);
    functions.deleteCookie("user_token");
    window.location.reload();
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.nav}>
        {children && children}
        <span className="nav-user-info">
          {appContext.userId ? (
            <>
              <Avatar alt={appContext.userName} src={appContext.userAvatar} />
              <span>{appContext.userFirstName}</span>
              <Button color="inherit" component={Link} href={window.location.href} onClick={signOut} className={classes.navItem}>
                Sign Out
              </Button>
            </>
          ) : (
            <SignIn />
          )}
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
