import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppContext from "../../contexts/AppContext";

const CreateList = (props) => {
  const appContext = useContext(AppContext);

  const handleCreate = async () => {
    try {
      const { data } = await axios.post("/api/owner/lists", { owner: appContext.ownerId, listName: name });
      // TODO add success handling
      console.log(data._id);
      appContext.setListId = data._id;
    } catch (error) {
      // TODO add error handling
      console.log(error);
    }
  };

  const handleListNameChange = (e) => {
    setName(e.target.value);
  };

  const isValidName = () => {
    return !Boolean(name.length);
  };

  const { open, onClose } = props;
  const [name, setName] = useState("Wedding Gift List");
  const [error, setError] = useState(isValidName());

  useEffect(() => setError(isValidName()), [name]);

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">New Gift Registry List</DialogTitle>
      <DialogContent>
        <DialogContentText>Create a new gift registry.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="listName"
          label="Name"
          type="text"
          fullWidth
          required
          value={name}
          onChange={handleListNameChange}
          error={error}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCreate} color="primary" disabled={error}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateList;
