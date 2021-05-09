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
  // FIXME find by state of list id instead or maybe not
  try {
    const list = await List.findById(req.params.id);
    if (!list) return res.status(404).send("List not found");
    await list.populate({ path: "owner", select: "name image" }).execPopulate();
    await list.populate("listItems");
    console.log(list);
    res.status(200).send(list);
  } catch (error) {
    // TODO fix error handling
    console.log(error);
    res.status(500).send(error);
  }
});

listsRouter.delete("/:id", async (req, res) => {
  try {
    const lists = await List.deleteOne({ _id: req.params.id }, { new: true });
    res.status(200).send(lists);
  } catch (error) {}
});

listsRouter.delete("/:listId/:itemId", async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) res.status(404).send("List not found");
    list.deleteItem(req.params.itemId);
  } catch (error) {}
});

module.exports = listsRouter;
