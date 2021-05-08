import React, { useContext, useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import AppContext from "../../contexts/AppContext";
import Nav from "../../components/Nav/Nav.component";
import Iframe from "../../components/Iframe/Iframe.component";
import functions from "../../functions/functions";
import "./listView.css";

const ListView = () => {
  const appContext = useContext(AppContext);
  const srcs = ["https://www.amazon.com/"];
  const [src, setSrc] = useState(srcs[0]);
  const [srcInput, setSrcInput] = useState(src);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Adjust to both view and edit

  const renderListItems = () => {
    return items.map((item) => (
      <ListItem
        button
        key={item._id}
        onClick={(e) => {
          if (e.target.classList.contains("btn")) setSrc(item.link);
        }}
      >
        <ListItemText primary={item.itemName} />
      </ListItem>
    ));
  };

  useEffect(() => {
    const getListItems = async () => {
      setIsLoading(true);
      try {
        const data = await functions.getListItems(appContext.listId);
        setItems(data);
      } catch (error) {
        // TODO add error handling
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getListItems();
  }, []);

  useEffect(() => setSrcInput(src), [src]);

  return (
    <>
      <Nav>
        <div className={"nav-list-section"}>
          <div>{appContext.listName}</div>
          {appContext.mode === "owner" && (
            <div>
              <ButtonGroup color="primary" aria-label="outlined primary button group">
                {/* TODO add actions to the buttons */}
                <Button>Delete List</Button>
                <Button>Switch List</Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      </Nav>
      <Box className="url-box">
        {appContext.mode === "owner" && (
          <>
            <TextField
              id="urlBar"
              label="url"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={srcInput}
              onChange={(e) => setSrcInput(e.target.value)}
            />
            <IconButton aria-label="search" onClick={() => setSrc(srcInput)}>
              <i class="fas fa-search"></i>
            </IconButton>
          </>
        )}
      </Box>
      <Box className="iframe-container">
        <Iframe src={src} />
        <List component="nav">{renderListItems()}</List>
      </Box>
    </>
  );
};

export default ListView;
