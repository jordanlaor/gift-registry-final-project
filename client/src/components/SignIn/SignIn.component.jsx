import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import "./signIn.css";

const SignIn = () => {
  // return <div id="oa_social_login"></div>;
  return (
    <Button color="inherit" id="oa_social_login_link">
      Log In
    </Button>
  );
};

export default SignIn;
