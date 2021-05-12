const express = require("express");
const List = require("../models/List");
const ListItem = require("../models/ListItemSchema");
const ListOwner = require("../models/ListOwner");
const callback = require("../utils/callback-uri");

const callbackRouter = new express.Router();

callbackRouter.post("/", async (req, res) => {
  // TODO add auth
  try {
    console.log(req);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = callbackRouter;
