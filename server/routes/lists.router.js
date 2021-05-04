const express = require("express");
const List = require("../models/List");
const ListOwner = require("../models/ListOwner");

const listsRouter = new express.Router();

listsRouter.get("/", async (req, res) => {
  // FIXME find by owner and not all
  const owner = "608fbbd12f6e9073c97ae094";
  try {
    const lists = await List.find({ owner });
    res.status(200).send(lists);
  } catch (error) {
    // TODO fix error handling
    res.status(500).send(error);
  }
});

listsRouter.get("/:id", async (req, res) => {
  // FIXME find by state of list id instead
  try {
    const list = List.findById(req.params.id);
    if (!list) res.status(404).send("List not found");
    list.populate("listItems");
    res.status(200).send(lists);
  } catch (error) {
    // TODO fix error handling
    res.status(500).send(error);
  }
});

module.exports = listsRouter;
