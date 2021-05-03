import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import CreateList from "../../components/CreateList/CreateList.component";

const Lists = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        New List
      </Button>
      <CreateList open={open} onClose={handleClose} />
    </div>
  );
};

export default Lists;
