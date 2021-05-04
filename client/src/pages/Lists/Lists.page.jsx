import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CreateList from "../../components/CreateList/CreateList.component";
import functions from "../../functions/functions";

const Lists = () => {
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderLists = () => {
    return lists.map((list) => (
      <Card
        key={list._id}
        onClick={() => {
          // TODO add navigation to list management page
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {list.listName}
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  useEffect(() => {
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
    getLists();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          {renderLists()}
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Create a New Gift List
          </Button>
          <CreateList open={open} onClose={handleClose} />
        </>
      )}
    </div>
  );
};

export default Lists;
