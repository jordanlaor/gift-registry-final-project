import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import "./signIn.css";

const SignIn = (props) => {
  // return <div id="oa_social_login"></div>;
  const { text, page } = props;
  return (
    <Button
      color="inherit"
      onClick={() => {
        window._oneall.push([
          "social_login",
          "set_callback_uri",
          `https://final-project-gift-registry.herokuapp.com/api/callback?redirect=${window.location.origin}&page=${
            page || window.location.pathname
          }`,
        ]);
        window._oneall.push(["social_login", "do_popup_ui"]);
      }}
    >
      {text || "Log In"}
    </Button>
  );
};

export default SignIn;
