import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import axios from "axios";

import CreateList from "../../components/CreateList/CreateList.component";
import functions from "../../functions/functions";
import AppContext from "../../contexts/AppContext";
import Nav from "../../components/Nav/Nav.component";
import SignIn from "../../components/SignIn/SignIn.component";

const Lists = () => {
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const appContext = useContext(AppContext);
  const params = useParams();
  const history = useHistory();
  const search = new URLSearchParams(useLocation().search);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteList = async (listId) => {
    try {
      const lists = await functions.deleteList(listId);
      console.log(lists);
      getLists();
    } catch (error) {
      console.log(error);
    }
  };

  const renderLists = () => {
    return lists.map((list) => (
      <ListItem
        button
        key={list._id}
        component={Link}
        to={"/list"}
        onClick={() => {
          appContext.setListId(list._id);
          appContext.setListName(list.listName);
        }}
      >
        <ListItemText primary={list.listName} />
        <ListItemSecondaryAction>
          <Button variant="contained" onClick={() => deleteList(list._id)}>
            Delete
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  const getLists = async () => {
    setIsLoading(true);
    try {
      const data = await functions.getOwnerLists(appContext.ownerId);
      setLists(data);
    } catch (error) {
      // TODO add error handling
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`/api/user/${search.get("token")}`);
      appContext.setOwnerId(data._id);
      appContext.setUserId(data._id);
      appContext.setOwnerAvatar(data.image);
      appContext.setUserAvatar(data.image);
      appContext.setOwnerName(data.name);
      appContext.setUserName(data.name);
    } catch (error) {
      console.log(error.data);
    } finally {
      history.push("/");
    }
  };

  useEffect(() => {
    if (appContext.ownerId) getLists();
  }, [appContext.ownerId]);

  useEffect(() => {
    if (search.get("page")) {
      history.push(`${search.get("page")}?token=${search.get("token")}`);
    }
    if (search.get("token")) {
      getUserData();
      history.push(history.location.pathname);
    }
  }, []);
  return (
    <div>
      <Nav />
      {isLoading ? (
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : appContext.ownerId ? (
        <>
          <List component="nav">
            {lists.length ? renderLists() : ""}
            <ListItem button onClick={handleClickOpen}>
              <ListItemText primary="Create a New Gift List" />
            </ListItem>
          </List>
          <CreateList open={open} onClose={handleClose} />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Lists;
