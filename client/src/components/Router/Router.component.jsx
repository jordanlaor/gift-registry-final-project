import axios from "axios";
import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import GifterListPage from "../../pages/GifterList/GifterList.page";
import AppContext from "../../contexts/AppContext";
import ListsPage from "../../pages/Lists/Lists.page";
import ListView from "../../pages/ListView/ListView.page";

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
          <GifterListPage />
        </Route>
        <Route path="/list/:id/token/:token" exact>
          <GifterListPage />
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
