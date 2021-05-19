import React, { useContext, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { isMobileOnly, withOrientationChange } from "react-device-detect";
import AppContext from "../../contexts/AppContext";
import SignIn from "../SignIn/SignIn.component";
import functions from "../../functions/functions";
import "./nav.css";

const useStyles = makeStyles((theme) => ({
  nav: {
    justifyContent: "space-between",
    marginTop: "8px",
  },
}));

const Nav = (props) => {
  const { children } = props;
  const classes = useStyles();
  const appContext = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const signOut = () => {
    appContext.setUserId(null);
    appContext.setUserAvatar(null);
    appContext.setUserName(null);
    appContext.setUserFirstName(null);
    functions.deleteCookie("user_token");
    window.location.reload();
  };

  return (
    <>
      {isMobileOnly ? (
        // <>
        //   <AppBar position="fixed" className={classes.navWrapper}>
        //     <IconButton
        //       edge="start"
        //       className={classes.menuButton}
        //       color="inherit"
        //       aria-label="menu"
        //       onClick={() => setOpen((prev) => !prev)}
        //     >
        //       <i class="fas fa-bars"></i>
        //     </IconButton>
        //   </AppBar>
        //   <Drawer anchor="left" open={open}>
        //     {children && children}
        //     {appContext.userId ? (
        //       <>
        //         <Avatar alt={appContext.userName} src={appContext.userAvatar} />
        //         <span>{appContext.userFirstName}</span>
        //         <Button color="inherit" component={Link} href={window.location.href} onClick={signOut} className={classes.navItem}>
        //           Sign Out
        //         </Button>
        //       </>
        //     ) : (
        //       <SignIn />
        //     )}
        //   </Drawer>
        // </>
        <div></div>
      ) : (
        // FIXME figure this menu out
        <AppBar position="sticky" className={classes.navWrapper}>
          <Toolbar className={classes.nav}>
            {(children && children) || <span></span>}
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
      )}
    </>
  );
};

export default Nav;
