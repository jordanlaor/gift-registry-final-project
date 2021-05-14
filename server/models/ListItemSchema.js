const mongoose = require("mongoose");

const ListItemSchema = new mongoose.Schema({
  // TODO add validation that the item can be taken
  link: {
    type: String,
    trim: true,
    required: true,
    // TODO add validation to the link
  },
  imageLink: {
    type: String,
    trim: true,
    required: true,
    // TODO add validation to the link
  },
  itemName: {
    type: String,
    required: true,
  },
  taker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ListOwner",
    default: null,
  },
  // list: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "List",
  // },
});

// ListItemSchema.methods.TakeTheItem = async function (takerName) {
//   const item = this;
//   if (item.taker) throw "The item is taken already";
//   item.taker = takerName;
//   await item.save();
//   return item;
// };

// ListItemSchema.pre("save", async function (next) {
//   const listItem = this;
//   try {
//     if (listItem.isNew) {
//       const list = await List.findById(listItem.list);
//       if (!list) throw "no list";
//       list.listItems.push(listItem._id);
//       await list.save();
//     }
//     next();
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

module.exports = ListItemSchema;
