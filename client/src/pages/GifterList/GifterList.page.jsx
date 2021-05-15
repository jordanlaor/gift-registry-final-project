import React, { useContext, useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory, useLocation, useParams } from "react-router";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import copy from "copy-to-clipboard";

import AppContext from "../../contexts/AppContext";
import SignIn from "../../components/SignIn/SignIn.component";
import functions from "../../functions/functions";
import Nav from "../../components/Nav/Nav.component";

const GifterListLoader = () => {
  const history = useHistory();
  const search = new URLSearchParams(useLocation().search);
  const params = useParams();
  const appContext = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`/api/user/${search.get("token")}`);
      appContext.setUserId(data._id);
      appContext.setUserAvatar(data.image);
      appContext.setUserName(data.name);
      appContext.setUserFirstName(data.firstName);
    } catch (error) {
      console.log(error);
    } finally {
      history.push(`/list/${params.id}`);
    }
  };

  useEffect(() => {
    const loadList = async () => {
      setIsLoading(true);
      try {
        if (params.id) {
          const { data } = await axios.get(`/api/lists/${params.id}`);
          appContext.setListId(params.id);
          appContext.setListName(data.listName);
          appContext.setOwnerId(data.owner._id);
          appContext.setOwnerName(data.owner.name);
          appContext.setOwnerAvatar(data.owner.image);
        }
      } catch (error) {
        console.log(error);
        // TODO error handling
      }
    };
    loadList();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (search.get("token")) {
      getUserData();
    }
  }, []);

  const getListItems = async () => {
    setIsLoading(true);
    try {
      if (appContext.listId && appContext.userId) {
        const data = await functions.getListItems(appContext.listId);
        setItems(data.listItems);
      }
    } catch (error) {
      // TODO add error handling
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const giftItem = async (itemId) => {
    try {
      const res = await functions.giftItem(appContext.userId, appContext.listId, itemId);
      await getListItems();
    } catch (error) {
      console.dir(error);
    }
  };

  const ungiftItem = async (itemId) => {
    try {
      const res = await functions.ungiftItem(appContext.listId, itemId);
      await getListItems();
    } catch (error) {
      console.dir(error);
    }
  };

  const renderListItems = () => {
    return items.map((item) => (
      <List key={item._id}>
        <ListItem button alignItems="flex-start">
          <ListItemAvatar>
            <Avatar variant="rounded" alt={item.itemName} src={item.imageLink} />
          </ListItemAvatar>
          <ListItemText primary={item.itemName} />
        </ListItem>
        <ListItem>
          <ButtonGroup aria-label="outlined primary button group">
            <Button
              disabled={item.taker && item.taker._id !== appContext.userId}
              onClick={item.taker ? () => ungiftItem(item._id) : () => giftItem(item._id)}
              className="btn"
            >
              {item.taker?._id === appContext.userId ? "Ungift This" : "Gift This"}
            </Button>
            <Button component={Link} underline="none" target="_blank" href={item.link}>
              Go Here
            </Button>
            <Button onClick={() => copy(item.link)} className="btn">
              Copy Link
            </Button>
          </ButtonGroup>
        </ListItem>
        <Divider />
      </List>
    ));
  };

  useEffect(() => {
    getListItems();
  }, [appContext.listId, appContext.userId]);

  return (
    <>
      <Nav>
        <Button color="inherit" component={Link} href={window.location.origin}>
          My Lists
        </Button>
        <div className="nav-list-section nav-user-info">
          {appContext.userId !== appContext.ownerId && <Avatar alt={appContext.ownerName} src={appContext.ownerAvatar} />}
          <div>{appContext.listName}</div>
        </div>
      </Nav>

      {isLoading ? <CircularProgress /> : <List component="nav">{items.length ? renderListItems() : ""}</List>}
    </>
  );
  // return <SignIn />;
};

export default GifterListLoader;
