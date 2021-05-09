import axios from "axios";
import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GifterListLoader from "../GifterListLoader/GifterListLoader.component";
import AppContext from "../../contexts/AppContext";
import HomePage from "../../pages/Home/Home.page";

import ListsPage from "../../pages/Lists/Lists.page";
import ListView from "../../pages/ListView/ListView.page";
import Href from "../href";

const Router = () => {
  const appContext = useContext(AppContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/lists" exact>
          <ListsPage />
        </Route>
        <Route path="/list" exact>
          <ListView />
        </Route>
        <Route path="/list/:id" exact>
          <GifterListLoader />
        </Route>
        <Route path="/href" exact>
          <Href />
        </Route>
        {/* TODO add 404 */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
