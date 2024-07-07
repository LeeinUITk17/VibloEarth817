const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const COLLECTION_NAME = "Token";

const newSchema = new Schema(
  {
      userid:{
        type:String,
        required: true,
      },
      token:{
        type:String,
        required: true,
      },
      expireAt: {
        type: Date,
        default: () => Date.now() + 7 * 24 * 60 * 60 * 1000, 
      },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(COLLECTION_NAME, newSchema);