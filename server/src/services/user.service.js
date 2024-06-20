const mongoose=require('mongoose');
const usermodel=require('../models/user.model');

const adduser=async(body)=>{
    return await usermodel.create(body);
}
const getuserbyid=async(id)=>{
    return await usermodel.findById(id).exec();
}
const deteleuser=async(id)=>{
    return await usermodel.deleteOne({_id: new mongoose.Types.ObjectId(id)});
}
const updateuser=async(id,body)=>{
    return await usermodel.findByIdAndUpdate(
        {_id: new mongoose.Types.ObjectId(id)},
        {$set: body},
    );
}
const getStatusCounts = async () => {
    const items = await usermodel.find({});
    const statusCounts = {
      All: items.length,
      Active: items.filter((item) => item.status === 'active').length,
      Inactive: items.filter((item) => item.status === 'inactive').length,
    };
    return statusCounts;
  };

  const getauth = async (id) => {
    return await usermodel.findById(id).select('_id name avatar').exec();
}
const addFollower = async (userId, followerId) => {
    return await usermodel.findByIdAndUpdate(
        userId,
        { $push: { followers: followerId } },
        { new: true, useFindAndModify: false }
    );
}

const getfollower=async(id)=>{
    const data = await usermodel.findById(id).select('followers').exec();
    if(data.followers.length===0){
        return [];
    }
    const promises = data.followers ? data.followers.map(element => getauth(element)) : [];
    const List = await Promise.all(promises);
    return List;
}
const getfollowing = async (id) => {
    const data = await usermodel.findById(id).select('following').exec();
    if(data.following.length===0){
        return [];
    }
    const promises = data.following ? data.following.map(element => getauth(element)) : [];
    const List = await Promise.all(promises);
    //console.log(List);
    return List;
}

const removeFollower = async (userId, followerId) => {
    return await usermodel.findByIdAndUpdate(
        userId,
        { $pull: { followers: followerId } },
        { new: true, useFindAndModify: false }
    );
}

const addFollowing = async (userId, followingId) => {
    return await usermodel.findByIdAndUpdate(
        userId,
        { $push: { following: followingId } },
        { new: true, useFindAndModify: false }
    );
}

const removeFollowing = async (userId, followingId) => {
    return await usermodel.findByIdAndUpdate(
        userId,
        { $pull: { following: followingId } },
        { new: true, useFindAndModify: false }
    );
}
  module.exports={
        adduser,
        getuserbyid,
        deteleuser,
        updateuser,
        getStatusCounts,
        getauth,
        addFollower,
        removeFollower,
        addFollowing,
        removeFollowing,
        getfollower,
        getfollowing,
  }