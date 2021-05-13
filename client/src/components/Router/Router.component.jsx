import axios from "axios";
import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GifterListLoader from "../GifterListLoader/GifterListLoader.component";
import AppContext from "../../contexts/AppContext";
import HomePage from "../../pages/Home/Home.page";

import ListsPage from "../../pages/Lists/Lists.page";
import ListView from "../../pages/ListView/ListView.page";
import Href from "../href";
import SignIn from "../SignIn/SignIn.component";

const Router = () => {
  const appContext = useContext(AppContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <ListsPage />
        </Route>
        <Route path="/list" exact>
          <ListView />
        </Route>
        <Route path="/list/:id" exact>
          <GifterListLoader />
        </Route>
        <Route path="/list/:id/token/:token" exact>
          <GifterListLoader />
        </Route>
        <Route path="/token/:token" exact>
          <ListsPage />
        </Route>
        {/* TODO add 404 */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
