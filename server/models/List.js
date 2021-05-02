const mongoose = require("mongoose");

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
  listItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ListItem",
    },
  ],
});

const List = mongoose.model("List", ListSchema);

module.exports = List;
