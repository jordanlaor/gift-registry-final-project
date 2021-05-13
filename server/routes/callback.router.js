const express = require("express");
const List = require("../models/List");
const ListItem = require("../models/ListItemSchema");
const ListOwner = require("../models/ListOwner");

const callbackRouter = new express.Router();

callbackRouter.post("/", async (req, res) => {
  // TODO add auth
  try {
    const url =
      req.query.redirect[req.query.redirect.length - 1] === "/"
        ? req.query.redirect + `token/${req.body.connection_token}`
        : req.query.redirect + `/token/${req.body.connection_token}`;
    res.redirect(url);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = callbackRouter;