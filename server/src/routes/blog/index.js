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

module.exports = router;