import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../../pages/Home/Home.page";

import ListsPage from "../../pages/Lists/Lists.page";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/lists" exact>
          <ListsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
