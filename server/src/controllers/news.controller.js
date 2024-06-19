const {
    addItem,
    getItemById:getnewsbyid,
    updateItem,
    getItems,
    voteUp,
  removeUpvote,
  voteDown,
  removeDownvote,
 }=require('../services/news.service')
 const {
    getauth,
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
            const data=await commentmodel.create(req.body);
            return res.send(data);
        } catch (error) {
            console.error('Error processing comment:', error);
            return res.send('An error occurred. Check server console for details.');
        }
       }

       getnews=async(req,res)=>{
        try {
            const news = await getItems();
            return res.json(news);
        } catch (error) {
            console.error('Error processing news:', error);
            return res.send('An error occurred. Check server console for details.');
        }
       }
       getDetail = async (req, res) => {
        const { id } = req.params; 
        if (!id) {
            return res.send(false);
        }  
        try {
            const data = await getnewsbyid(id);
            if (!data) {
              console.log('data not found');
                return res.send(false)
            }  
            const author = await getauth(data.authorID);  
            if (!author) {
              console.log('author not found');
                return res.send(false)
            }
            const comments=await commentmodel.find({newid:id}).exec();
            return res.send({ data, author,comments });
        } catch (error) {
            console.error(error);
            return res.send(false);
        }
    };
    async upvote(req, res) {
        try {
          const {id,newsId}=req.params;
          const result = await voteUp(newsId, id);
          return res.send(result.toString());
        } catch (error) {
          console.error(error);
          return res.send(false);
        }
      }
    
      async removeUpvote(req, res) {
        try {
          const {id,newsId}=req.params;
          const result = await removeUpvote(newsId, id);
          return res.send(result.toString());
        } catch (error) {
          console.error(error);
          return res.send(false);
        }
      }
    
      async downvote(req, res) {
        try {
          const {id,newsId}=req.params;
          const result = await voteDown(newsId, id);
          return res.send(result.toString());
        } catch (error) {
          console.error(error);
          return res.send(false);
        }
      }
    
      async removeDownvote(req, res) {
        try {
          const {id,newsId}=req.params;
          const result = await removeDownvote(newsId, id);
          return res.send(result.toString());
        } catch (error) {
          console.error(error);
          return res.send(false);
        }
      }
 }
 module.exports=new newsController();