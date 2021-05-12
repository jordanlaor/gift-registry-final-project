import React, { useContext, useEffect, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import CreateList from "../../components/CreateList/CreateList.component";
import functions from "../../functions/functions";
import AppContext from "../../contexts/AppContext";
import Nav from "../../components/Nav/Nav.component";

const Lists = () => {
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const appContext = useContext(AppContext);
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
      const data = await functions.getOwnerLists();
      setLists(data);
    } catch (error) {
      // TODO add error handling
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <div>
      <Nav></Nav>
      {isLoading ? (
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <List component="nav">
            {renderLists()}
            <ListItem button onClick={handleClickOpen}>
              <ListItemText primary="Create a New Gift List" />
            </ListItem>
          </List>
          <CreateList open={open} onClose={handleClose} />
        </>
      )}
    </div>
  );
};

export default Lists;
