import React, { useContext, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import AppContext from "../../contexts/AppContext";

const GifterListLoader = () => {
  const history = useHistory();
  const params = useParams();
  const appContext = useContext(AppContext);
  useEffect(() => {
    const loadList = async () => {
      appContext.setMode("gifter");
      try {
        if (params.id) {
          const { data } = await axios.get(`/api/lists/${params.id}`);
          console.log(data);
          appContext.setListId(params.id);
          appContext.setListName(data.listName);
          appContext.setOwnerId(data.owner._id);
          appContext.setOwnerName(data.owner.name);
          appContext.setOwnerAvatar(data.owner.image);
          history.push("/list");
        }
      } catch (error) {
        console.log(error);
        history.push("/");
        // TODO error handling
      }
    };
    loadList();
  }, []);
  return <CircularProgress />;
};

export default GifterListLoader;
