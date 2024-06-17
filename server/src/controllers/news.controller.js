const {
    addItem,
    getItemById:getnewsbyid,
    updateItem,
 }=require('../services/news.service')
 const {
    getuserbyid,
 }=require('../services/user.service')
 const commentmodel=require('../models/comment.model');
 const cloudinary = require('cloudinary').v2;
 class newsController{
      addnews=async(req,res)=>{
       try {
       console.log(req.body);
       const uploadedFiles = await Promise.all([
          cloudinary.uploader.upload(req.files['avatar'][0].path),
      ]);
      const filePaths = {
          avatar: uploadedFiles[0].secure_url,
      };
       await addItem({ ...req.body, ...filePaths });
       return res.send('News added successfully');
    } catch (error) {
       console.error('Error processing form:', error);
      return res.send('An error occurred. Check server console for details.');
   }
      
      }
      comment=async(req,res)=>{
        try {
            console.log(req.body);
            await commentmodel.create(req.body);
            const auth = req.body.auth;
            return res.send('comment added successfully');
        } catch (error) {
            console.error('Error processing comment:', error);
            return res.send('An error occurred. Check server console for details.');
        }
       }
 }
 module.exports=new newsController();