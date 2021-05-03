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
  image: {
    type: String,
    default:
      "https://s3.getstickerpack.com/storage/uploads/sticker-pack/cut-the-rope-christmas-edition/sticker_3.png?c102632f5bbb0a9c00834ff38e7acbb1",
    // "https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.18169-9/1450290_491091230988565_2094896869_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=VMMlVGiBYowAX_NlTON&_nc_ht=scontent.fsdv1-2.fna&oh=1b70bd96056c4d489e636cf910e11605&oe=60B5D6A0",

    // TODO add image link validation
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
