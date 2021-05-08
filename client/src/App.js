import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Router from "./components/Router/Router.component";
import AppContext from "./contexts/AppContext";

function App() {
  // TODO should be based on auth and start as null
  const [ownerId, setOwnerId] = useState("608fbbd12f6e9073c97ae094");
  const [ownerName, setOwnerName] = useState();
  const [ownerAvatar, setOwnerAvatar] = useState();
  const [listId, setListId] = useState();
  const [listName, setListName] = useState();
  const [mode, setMode] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          listId,
          setListId,
          listName,
          setListName,
          mode,
          setMode,
          ownerId,
          setOwnerId,
          ownerName,
          setOwnerName,
          ownerAvatar,
          setOwnerAvatar,
        }}
      >
        <CssBaseline />
        <Router />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
