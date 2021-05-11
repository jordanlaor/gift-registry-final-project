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
    res.status(200).send(list);
  } catch (error) {
    // TODO fix error handling
    console.log(error);
    res.status(500).send(error);
  }
});

listsRouter.delete("/:listId/:itemId", async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) res.status(404).send("List not found");
    const filtered = await list.deleteItem(req.params.itemId);
    console.log(req.params);
    res.status(200).send(filtered);
  } catch (error) {
    res.status(500).send(error);
  }
});

listsRouter.delete("/:id", async (req, res) => {
  try {
    const lists = await List.deleteOne({ _id: req.params.id }, { new: true });
    res.status(200).send(lists);
  } catch (error) {
    res.status(500).send(error);
  }
});

listsRouter.put("/:id", async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) res.status(404).send("List not found");
    const listItems = await list.addItem(req.body);
    // TODO move to pre save
    res.status(201).send(listItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

listsRouter.patch("/:id", async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) res.status(404).send("List not found");
    const listItems = await list.takeItem(req.body.itemId, req.body.gifter);
    // TODO move to pre save
    res.status(201).send(listItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = listsRouter;
