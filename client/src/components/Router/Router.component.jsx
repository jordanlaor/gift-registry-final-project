import axios from "axios";
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect, useLocation } from "react-router-dom";

import GifterListPage from "../../pages/GifterList/GifterList.page";
import AppContext from "../../contexts/AppContext";
import ListsPage from "../../pages/Lists/Lists.page";
import ListView from "../../pages/ListView/ListView.page";
import functions from "../../functions/functions";

const Router = () => {
  const appContext = useContext(AppContext);

  const getUserData = async (cookieToken) => {
    await functions.getUserData(cookieToken, appContext);
  };

  useEffect(() => {
    if (!appContext.token) {
      const cookieToken = functions.getCookie("user_token");
      if (cookieToken.length) {
        try {
          getUserData(cookieToken);
          appContext.setToken(cookieToken);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <ListsPage />
        </Route>
        <Route path="/list" exact>
          {appContext.userId && appContext.listId ? <ListView /> : <Redirect path="/" />}
        </Route>
        <Route path="/list/:id" exact>
          <GifterListPage />
        </Route>
        {/* <Route path="/list/:id/token/:token" exact>
          <GifterListPage />
        </Route>
        <Route path="/token/:token" exact>
          <ListsPage />
        </Route> */}
        {/* TODO add 404 */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
