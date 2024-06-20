const {
    updateuser,
    getuserbyid,
    addFollower,
    removeFollower,
    addFollowing,
    removeFollowing,
  } = require('../services/user.service');
  const path = require('path');
  const cloudinary = require('cloudinary').v2;
  class profileController {
    updateprofile = async (req, res) => {
      try {
              // const id= req.user._id;
              const {id}=req.params;
              console.log(req.body);
         await updateuser(id,req.body);
         const account = await getuserbyid(id);
         return res.send(account);
    } catch (error) {
        console.error('Error processing form:', error);
        return res.send('An error occurred. Check server console for details.');
    }
    };
    cloudinaryImage=async(req,res,next)=>{
      try {
        const {id}=req.params;
          if (!req.file) {
              console.log('No file uploaded');
              return res.send('No file uploaded');
          }
          const result = await cloudinary.uploader.upload(req.file.path);
          console.log(result.secure_url);
          await updateuser(id, { avatar: result.secure_url });
          const account = await getuserbyid(id);
          return res.send(account);
      } catch (error) {
          console.error('Error processing form:', error);
          return res.send('An error occurred. Check server console for details.');
      }
    }
    getinf=async(req,res,next)=>{
      try {
          const {id}=req.params;
          const account = await getuserbyid(id);
          return res.send(account);
      } catch (error) {
          console.error('Error processing form:', error);
          return res.send('An error occurred. Check server console for details.');
      }
    }
    addfollower=async(req,res,next)=>{
       try {
          const { id, followerId } = req.params;
          await addFollower(id, followerId);
          // const account = await getuserbyid(id);
          return res.send(true);
    }catch (error) {
        console.error('Error processing form:', error);
        return res.send('An error occurred. Check server console for details.');
    }
  }
  removefollower=async(req,res,next)=>{
    try {
        const { id, followerId } = req.params;
        await removeFollower(id, followerId);
        // const account = await getuserbyid(id);
        return res.send(true);
  }catch(error){
      console.error('Error processing form:', error);
      return res.send('An error occurred. Check server console for details.');
  }
}
addfollowing=async(req,res,next)=>{
  try {
      const { id, followingId } = req.params;
      await addFollowing(id, followingId);
      // const account = await getuserbyid(id);
      return res.send(true);
}catch(error){
    console.error('Error processing form:', error);
    return res.send('An error occurred. Check server console for details.');
}
}
removefollowing=async(req,res,next)=>{
try {
    const { id, followingId } = req.params;
    await removeFollowing(id, followingId);
    // const account = await getuserbyid(id);
    return res.send(true);
}catch(error){
console.error('Error processing form:', error);
return res.send('An error occurred. Check server console for details.');
}
}
  } 
  module.exports = new profileController();