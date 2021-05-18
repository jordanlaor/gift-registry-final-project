import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Backdrop, CircularProgress, Link, Button, Avatar } from "@material-ui/core";
import SignIn from "../../components/SignIn/SignIn.component";
import AppContext from "../../contexts/AppContext";
import functions from "../../functions/functions";
import GiftButton from "../../components/GiftButton/GiftButton.component";
import Nav from "../../components/Nav/Nav.component";

const GifterCommit = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemTaken, setItemTaken] = useState(false);
  const appContext = useContext(AppContext);
  const params = useParams();

  const giftItem = async () => {
    setIsLoading(true);
    try {
      const res = await functions.giftItem(appContext.userId, params.listId, params.itemId);
      setItemTaken(() => true);
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
    // else {
    //   const token = functions.getCookie("user_token");
    //   if (token.length) {
    //     try {
    //       await functions.getUserData(appContext.token, appContext);
    //       appContext.setToken(() => token);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // }
  };
  useEffect(() => {
    if (appContext.userId) giftItem();
  }, [appContext.userId]);
  return (
    <>
      <Nav>
        <Button underline="none" color="inherit" component={Link} href={window.location.origin}>
          My Lists
        </Button>
        <div className="nav-list-section nav-gifter nav-user-info">
          {appContext.userId !== appContext.ownerId && <Avatar alt={appContext.ownerName} src={appContext.ownerAvatar} />}
          <div className="listNameGifter">{appContext.listName}</div>
        </div>
      </Nav>
      {!appContext.token ? (
        <GiftButton>
          <SignIn />
        </GiftButton>
      ) : appContext.userId && itemTaken ? (
        <div>
          You successfully committed to gift this item
          <Button component={Link} href={`${window.location.origin.replace(/\/$/, "")}/list/${appContext.listId}`}>
            Go Back to the List
          </Button>
        </div>
      ) : (
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default GifterCommit;
