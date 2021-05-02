const mongoose = require("mongoose");
const validator = require("validator");

const ListOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) throw `${value} is not a valid email`;
    },
  },
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
});

const ListOwner = mongoose.model("ListOwner", ListOwnerSchema);

module.exports = ListOwner;
