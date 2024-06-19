const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const COLLECTION_NAME = "News";

const newSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "inactive",
      enum: ["active", "inactive"],
    },
    avatar: {
      type: String,
    },
    content:{
      type: String,
    },
    special: {
      type: Boolean, 
      default: false, 
    },
    category: {
      type: String,
    },
    authorID:{
        type:String,
    },
    author:{
      type:String,
      default:"admin",
    },
    upvotes: [{
      type: String,
  }],
  downvotes: [{
      type: String,
  }],
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(COLLECTION_NAME, newSchema);