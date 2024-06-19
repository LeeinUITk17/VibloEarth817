const express = require('express');
const blogController = require('../../controllers/news.controller');
const router = express.Router();

const {catchAsync}=require('../../utils/catchAsync');
const {cloudinaryHelper}=require('../../helpers/cloudinary.helper');


router.post('/blognew',
cloudinaryHelper.fields([
    { name: 'avatar', maxCount: 1 }, 
  ]),
  (err, req, res, next) => {
    if (err) {
      console.error('Multer error:', err);
      return res.status(500).send('Error uploading file');
    }
    next();
  }, catchAsync(blogController.addnews));

router.post('/comment',catchAsync(blogController.comment));

router.get('/all',catchAsync(blogController.getnews));

router.get('/detail/:id',catchAsync(blogController.getDetail));

router.post('/like/:id/:newsId',catchAsync(blogController.upvote));
router.post('/dislike/:id/:newsId',catchAsync(blogController.downvote));

router.delete('/unlike/:id/:newsId',catchAsync(blogController.removeUpvote));
router.delete('/undislike/:id/:newsId',catchAsync(blogController.removeDownvote));

module.exports = router;