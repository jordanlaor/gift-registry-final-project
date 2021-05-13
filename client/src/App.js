import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";

import theme from "./theme";
import Router from "./components/Router/Router.component";
import AppContext from "./contexts/AppContext";

function App() {
  // TODO should be based on auth and start as null
  const [token, setToken] = useState();
  const [ownerId, setOwnerId] = useState();
  const [ownerName, setOwnerName] = useState();
  const [ownerAvatar, setOwnerAvatar] = useState();
  const [ownerLists, setOwnerLists] = useState();
  const [listId, setListId] = useState();
  const [listName, setListName] = useState();
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          listId,
          setListId,
          listName,
          setListName,
          token,
          setToken,
          ownerId,
          setOwnerId,
          ownerName,
          setOwnerName,
          ownerAvatar,
          setOwnerAvatar,
          ownerLists,
          setOwnerLists,
        }}
      >
        <CssBaseline />
        <Router />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
