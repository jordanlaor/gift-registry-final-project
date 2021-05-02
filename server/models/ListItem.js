const mongoose = require("mongoose");

const ListItemSchema = new mongoose.Schema({
  // TODO add validation that the item can be taken
  link: {
    type: String,
    trim: true,
    required: true,
    // TODO add validation to the link
  },
  // TODO add photo and name
  isTaken: {
    type: Boolean,
    default: false,
  },
  taker: {
    type: String,
    default: "",
    validate(value) {
      if (this.isTaken && !value.length) throw "You need to provide a taker name";
      if (!this.isTaken && value.length) throw "You can have a taker name without isTaken being true";
    },
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "List",
  },
});

ListItemSchema.methods.TakeTheItem = async function (takerName) {
  const item = this;
  if (item.isTaken) throw "The item is taken already";
  item.isTaken = true;
  item.taker = takerName;
  await item.save();
  return item;
};

const ListItem = mongoose.model("ListItem", ListItemSchema);

module.exports = ListItem;
