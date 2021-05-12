import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";

import AppContext from "../../contexts/AppContext";
import Nav from "../../components/Nav/Nav.component";
import Iframe from "../../components/Iframe/Iframe.component";
import functions from "../../functions/functions";
import "./listView.css";

const ListView = () => {
  const appContext = useContext(AppContext);
  const srcs = ["https://www.amazon.com/"];
  const iframeRef = useRef(null);
  const [src, setSrc] = useState(srcs[0]);
  const [srcInput, setSrcInput] = useState(src);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [gifter, setGifter] = useState("John Doe");

  const history = useHistory();

  // Adjust to both view and edit

  const renderListItems = () => {
    return items.map((item) => (
      <List>
        <ListItem
          button
          key={item._id}
          alignItems="flex-start"
          onClick={(e) => {
            if (!e.target.classList.contains("btn")) setSrc(item.link);
            // setSrc(item.link);
          }}
        >
          <ListItemAvatar>
            <Avatar alt={item.itemName} src={item.imageLink} />
          </ListItemAvatar>
          <ListItemText primary={item.itemName} />
        </ListItem>
        <ListItem button>
          <Button
            disabled={appContext.mode === "gifter" && item.taker.length}
            onClick={appContext.mode === "owner" ? () => deleteItem(item._id) : () => takeItem(item._id)}
            className="btn"
          >
            {appContext.mode === "owner" ? "Delete Item" : "Gift This"}
          </Button>
        </ListItem>
        <Divider />
      </List>
    ));
  };

  const switchList = () => history.push("/lists");

  const deleteList = async () => {
    try {
      const lists = await functions.deleteList(appContext.listId);
      console.log(lists);
      switchList();
    } catch (error) {
      console.log(error);
    }
  };

  const getListItems = async () => {
    setIsLoading(true);
    try {
      const data = await functions.getListItems(appContext.listId);
      setItems(data.listItems);
    } catch (error) {
      // TODO add error handling
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addItem = async () => {
    debugger;
    try {
      const item = await functions.createItem(iframeRef.current.firstElementChild.dataset.actualurl);
      console.log(item);
      const items = await functions.addItemToList(appContext.listId, item);
      console.log(items);
      await getListItems();
    } catch (error) {
      console.dir(error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      const res = await functions.deleteItem(appContext.listId, itemId);

      await getListItems();
    } catch (error) {
      console.dir(error);
    }
  };

  const takeItem = async (itemId) => {
    debugger;
    if (!gifter.length) setGifter("John Doe");
    try {
      const res = await functions.takeItem(gifter, appContext.listId, itemId);

      await getListItems();
    } catch (error) {
      console.dir(error);
    }
  };

  useEffect(() => {
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
              <ButtonGroup aria-label="outlined primary button group">
                {/* TODO add actions to the buttons */}
                <Button onClick={deleteList}>Delete List</Button>
                <Button onClick={switchList}>Switch List</Button>
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
      <div className="iframe-container">
        <div ref={iframeRef}>
          <Iframe src={src} />
          {/* <div data-actualURL="https://ksp.co.il/web/item/97638">DIVVVVVV</div> */}
        </div>
        <div className="iframe-add-nav-btn-wrap">
          {appContext.mode === "owner" ? (
            <button className="iframe-add-nav-btn" onClick={addItem}>
              <i class="fas fa-plus"></i>
              Add to List
            </button>
          ) : (
            <a
              href={iframeRef?.current?.firstElementChild?.dataset?.actualurl || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="navigate-link"
            >
              <button className="iframe-add-nav-btn">
                <i class="fas fa-location-arrow"></i>
                Navigate
              </button>
            </a>
          )}
        </div>
        <List component="nav">
          {appContext.mode === "gifter" && (
            <TextField id="outlined-basic" label="Name" variant="outlined" value={gifter} onChange={(e) => setGifter(e.target.value)} />
          )}
          {renderListItems()}
        </List>
      </div>
    </>
  );
};

export default ListView;
