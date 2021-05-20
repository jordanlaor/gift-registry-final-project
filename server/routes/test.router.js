const express = require("express");
const List = require("../models/List");
const ListItem = require("../models/ListItemSchema");
const ListOwner = require("../models/ListOwner");

const testRouter = new express.Router();

testRouter.post("/addOwner", async (req, res) => {
  try {
    const owner = new ListOwner(req.body);
    await owner.save();
    res.status(201).send(owner);
  } catch (error) {
    res.status(500).send(error);
  }
});

testRouter.post("/newList", async (req, res) => {
  try {
    const list = new List(req.body);

    await list.save();
    res.status(201).send(list);
  } catch (error) {
    res.status(500).send(error);
  }
});

testRouter.post("/newItem", async (req, res) => {
  try {
    const { listId, ...item } = req.body;

    const list = await List.findById(listId);
    if (!list) throw "no list";
    const listItems = await list.addItem(item);
    res.status(201).send(listItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

testRouter.patch("/takeItem", async (req, res) => {
  try {
    const { listId, itemId, name } = req.body;

    if (!itemId || !name) throw "missing the name or the itemId";

    const list = await List.findById(listId);
    if (!list) throw "no list";
    const listItems = await list.takeItem(itemId, name);
    res.status(201).send(listItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

testRouter.get("/owner", async (req, res) => {
  try {
    const owners = await ListOwner.find({}).populate({ path: "lists", populate: { path: "listItems" } });
    res.status(200).send(owners);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = testRouter;
