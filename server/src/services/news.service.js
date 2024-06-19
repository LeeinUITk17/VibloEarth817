const mongoose = require("mongoose");
const newsModel = require("../models/news.model");

const addItem = async (body) => {
  await newsModel.create(body);
};
const getItems = async () => {
    return await newsModel.find();
  };

const getItemById = async (id) => {
  return await newsModel.findById(id).exec();
};

const deleteItem = async (id) => {
  return await newsModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
};

const updateItem = async (id, body) => {
  await newsModel.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    { $set: body }
  );
};
const getStatusCounts = async () => {
  const items = await newsModel.find({});
  const statusCounts = {
    All: items.length,
    Active: items.filter((item) => item.status === 'active').length,
    Inactive: items.filter((item) => item.status === 'inactive').length,
  };
  return statusCounts;
};
const voteUp = async (newsId, userId) => {
  const news = await newsModel.findByIdAndUpdate(
      newsId,
      { $addToSet: { upvotes: userId } },
      { new: true, useFindAndModify: false }
  );
  if (!news) {
    throw new Error('News not found');
}
  return news.upvotes.length;
}

const removeUpvote = async (newsId, userId) => {
  const news = await newsModel.findByIdAndUpdate(
      newsId,
      { $pull: { upvotes: userId } },
      { new: true, useFindAndModify: false }
  );
  if (!news) {
    throw new Error('News not found');
}
  return news.upvotes.length;
}

const voteDown = async (newsId, userId) => {
  const news = await newsModel.findByIdAndUpdate(
      newsId,
      { $addToSet: { downvotes: userId } },
      { new: true, useFindAndModify: false }
  );
  if (!news) {
    throw new Error('News not found');
}
  return news.downvotes.length;
}

const removeDownvote = async (newsId, userId) => {
  const news = await newsModel.findByIdAndUpdate(
      newsId,
      { $pull: { downvotes: userId } },
      { new: true, useFindAndModify: false }
  );
  if (!news) {
    throw new Error('News not found');
}
  return news.downvotes.length;
}
module.exports = {
  addItem,
  getItems,
  deleteItem,
  getItemById,
  updateItem,
  getStatusCounts,
  voteUp,
  removeUpvote,
  voteDown,
  removeDownvote,
};