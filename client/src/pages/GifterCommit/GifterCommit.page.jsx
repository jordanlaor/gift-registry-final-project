import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { Backdrop, CircularProgress, Link, Button } from "@material-ui/core";
import SignIn from "../../components/SignIn/SignIn.component";
import AppContext from "../../contexts/AppContext";
import functions from "../../functions/functions";

const GifterCommit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const appContext = useContext(AppContext);
  const params = useParams();
  const giftItem = async () => {
    try {
      const res = await functions.giftItem(appContext.userId, appContext.listId, params.itemId);
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };
  useState(() => {
    if (appContext.userId) {
      setIsLoading(true);
      giftItem();
    }
  }, [appContext.userId]);
  return (
    <>
      {isLoading ? (
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : appContext.userId ? (
        <div>
          You successfully committed to gift this item
          <Button component={Link} href={`${window.location.origin.replace(/\/$/, "")}/list/${appContext.listId}`}>
            Go Back to the List
          </Button>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default GifterCommit;
