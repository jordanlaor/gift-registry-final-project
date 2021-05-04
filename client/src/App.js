import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Router from "./components/Router/Router.component";
import OwnerContext from "./contexts/OwnerContext";
import AppContext from "./contexts/AppContext";

function App() {
  // TODO should be based on auth and start as null
  const [ownerId, setOwnerId] = useState("608fbbd12f6e9073c97ae094");
  const [listId, setListId] = useState();
  const [mode, setMode] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ listId, setListId }}>
        <OwnerContext.Provider value={{ ownerId, setOwnerId }}>
          <CssBaseline />
          <Router />
        </OwnerContext.Provider>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
