const express = require("express");
const List = require("../models/List");
const ListItem = require("../models/ListItem");
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
    const owner = await ListOwner.findById(list.owner);
    if (!owner) throw "no owner";
    owner.lists.push(list._id);
    await owner.save();
    // TODO move to pre save
    await list.save();
    res.status(201).send(list);
  } catch (error) {
    res.status(500).send(error);
  }
});

testRouter.post("/newItem", async (req, res) => {
  try {
    const listItem = new ListItem(req.body);
    const list = await List.findById(listItem.list);
    if (!list) throw "no list";
    list.listItems.push(listItem._id);
    await list.save();
    // TODO move to pre save
    await listItem.save();
    res.status(201).send(listItem);
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
