import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AppContext from "../../contexts/AppContext";
import { Link } from "react-router-dom";

const Nav = (props) => {
  console.log(props);
  const { children } = props;
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
      <Toolbar>
        <Button color="inherit" component={Link} to={switchModeDestination} onClick={modeToggler}>
          Switch Mode
        </Button>
        {children && children}
        <Avatar alt={appContext.ownerName} src={appContext.ownerAvatar} />
        {appContext.mode === "owner" && (
          <Button color="inherit" component={Link} to="/" onClick={signOut}>
            Sign Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
