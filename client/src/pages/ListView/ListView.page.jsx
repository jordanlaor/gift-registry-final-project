import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import TextClamp from "react-string-clamp";
import { Link } from "react-router-dom";

import AppContext from "../../contexts/AppContext";
import Nav from "../../components/Nav/Nav.component";
import Iframe from "../../components/Iframe/Iframe.component";
import functions from "../../functions/functions";
import SocialMediaShare from "../../components/SocialMediaShare/SocialMediaShare.component";
import "./listView.css";

const ListView = () => {
  const appContext = useContext(AppContext);
  const iframeRef = useRef(null);
  const [src, setSrc] = useState("https://www.amazon.com/");
  const [srcInput, setSrcInput] = useState(src);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const iframeWrapperRef = useRef(null);
  const listWrapperRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(0);
  const [listHeight, setListHeight] = useState(0);

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
          <TextClamp lines={3} text={item.itemName} className="gift-list-item-text" />
        </ListItem>
        <ListItem>
          <Button onClick={() => deleteItem(item._id)} className="btn">
            Delete Item
          </Button>
        </ListItem>
        <Divider />
      </List>
    ));
  };

  const switchList = () => history.push("/");

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
    setIsLoading(true);
    try {
      const item = await functions.createItem(iframeRef.current.firstElementChild.dataset.actualurl);
      const items = await functions.addItemToList(appContext.listId, item);
      await getListItems();
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      const res = await functions.deleteItem(appContext.listId, itemId);

      await getListItems();
    } catch (error) {
      console.log(error);
    }
  };

  const setIframeHeightFunc = () => {
    resetListHeight();
    setIframeHeight(() => window.getComputedStyle(ReactDOM.findDOMNode(iframeWrapperRef.current)).height);
  };

  const resetListHeight = () => setListHeight(() => 0);

  useEffect(() => {
    getListItems();
  }, []);

  useEffect(() => setSrcInput(src), [src]);

  useEffect(() => {
    window.addEventListener("resize", setIframeHeightFunc);
  }, []);

  useEffect(() => setIframeHeightFunc(), [iframeWrapperRef]);
  useEffect(() => setListHeight(() => iframeHeight), [iframeHeight]);

  const shareLink = `${window.location.origin.replace(/\/$/, "")}/list/${appContext.listId}`;
  const shareText = `Want to give me a gift? Buy me a gift from the gift list.`;
  return (
    <>
      <Nav>
        <Button color="inherit" component={Link} to="/">
          My Lists
        </Button>
        <div className={"nav-list-section"}>
          <div>{appContext.listName}</div>
          {
            <div>
              {/* <ButtonGroup aria-label="outlined primary button group" color="white"> */}
              {/* TODO add actions to the buttons */}
              <Button color="inherit" onClick={deleteList}>
                Delete List
              </Button>
              {/* </ButtonGroup> */}
            </div>
          }
        </div>
      </Nav>
      <div className="page page-list-view">
        <Box className="url-box">
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
        </Box>
        <div className="iframe-container" ref={iframeWrapperRef}>
          <div ref={iframeRef} className="iframe-wrapper">
            <Iframe src={src} />
            {/* <div data-actualURL="https://ksp.co.il/web/item/97638">DIVVVVVV</div> */}
          </div>
          <div className="iframe-add-nav-btn-wrap">
            <button className="iframe-add-nav-btn" onClick={addItem} disabled={isLoading}>
              <i class="fas fa-plus"></i>
              Add to List
            </button>
          </div>
          <div className="list-view-list-wrapper" style={{ height: listHeight }} ref={listWrapperRef}>
            <List component="nav">
              <ListItem>
                <SocialMediaShare shareLink={shareLink} shareText={shareText} />
              </ListItem>
              <Divider />
              {renderListItems()}
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListView;
