import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../../pages/Home/Home.page";

import ListsPage from "../../pages/Lists/Lists.page";
import ListView from "../../pages/ListView/ListView.page";

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
        <Route path="/list" exact>
          <ListView />
        </Route>
        {/* TODO add 404 */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
