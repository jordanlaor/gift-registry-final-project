const mongoose = require("mongoose");
const ListItemSchema = require("./ListItemSchema");
const ListOwner = require("./ListOwner");

const ListSchema = new mongoose.Schema({
  owner: {
    // TODO replace with auth owner var
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ListOwner",
  },
  listName: {
    type: String,
    required: true,
  },
  listItems: [ListItemSchema],
});

ListSchema.pre("save", async function (next) {
  const list = this;
  try {
    if (list.isNew) {
      const owner = await ListOwner.findById(list.owner);
      if (!owner) throw "no owner";
      owner.lists.push(list._id);
      await owner.save();
    }
    next();
  } catch (error) {
    console.log(error);
    throw error;
  }
});

ListSchema.methods.addItem = async function (item) {
  try {
    const list = this;
    list.listItems.push(item);
    await list.save();
    return list;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

ListSchema.methods.deleteItem = async function (itemId) {
  try {
    const list = this;
    list.listItems = list.listItems.filter((item) => {
      console.log(item._id, itemId);
      return item._id != itemId;
    });
    await list.save();
    return list;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

ListSchema.methods.takeItem = async function (itemId, name) {
  try {
    const list = this;
    // const item = list.listItems.find((item) => item._id === itemId);
    const item = list.listItems.id(itemId);
    // const item = list.listItems.find((item) => item._id === itemId);
    console.log(item);
    if (!item) throw "No such item";
    item.taker = name;
    await list.save();
    return list;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const List = mongoose.model("List", ListSchema);

module.exports = List;
