import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import AppContext from "../../contexts/AppContext";
import axios from "axios";

const Home = () => {
  const [code, setCode] = useState("");
  const appContext = useContext(AppContext);
  const history = useHistory();

  const goToList = async () => {
    appContext.setMode("gifter");
    try {
      if (code) {
        const { data } = await axios.get(`/api/lists/${code}`);
        console.log(data);
        appContext.setListId(code);
        appContext.setListName(data.listName);
        appContext.setOwnerId(data.owner._id);
        appContext.setOwnerName(data.owner.name);
        appContext.setOwnerAvatar(data.owner.image);
        history.push("/list");
      }
    } catch (error) {
      console.log(error);
      // TODO error handling
    }
    // TODO create the function
  };

  const goToListManagement = () => {
    // TODO write the function
    appContext.setMode("owner");
    history.push("/lists");
  };
  return (
    <div>
      <Box>
        <Button variant="contained" onClick={goToListManagement}>
          Go to my lists
        </Button>
      </Box>
      <Box>
        <TextField id="code" label="List's code" value={code} onChange={(e) => setCode(e.target.value)} variant="outlined" />
        <Button variant="contained" onClick={goToList}>
          Go
        </Button>
      </Box>
    </div>
  );
};

export default Home;
