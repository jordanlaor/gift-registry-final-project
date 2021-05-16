const express = require("express");
const List = require("../models/List");
const ListItem = require("../models/ListItemSchema");
const ListOwner = require("../models/ListOwner");

const callbackRouter = new express.Router();

callbackRouter.post("/", async (req, res) => {
  // TODO add auth
  try {
    debugger;
    const url = req.query.redirect.replace(/\/$/, "") + `?token=${req.body.connection_token}&page=${req.query.page}`;
    res.redirect(url);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = callbackRouter;
