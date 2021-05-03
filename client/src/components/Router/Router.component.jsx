import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ListsPage from "../../pages/Lists/Lists.page";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/lists">
          <ListsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
