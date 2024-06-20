const express = require('express');
const ProfileController = require('../../controllers/profile.controller');
const router = express.Router();

const {catchAsync}=require('../../utils/catchAsync');
const {cloudinaryHelper}=require('../../helpers/cloudinary.helper');



router.post('/update/:id',catchAsync(ProfileController.updateprofile));
router.post('/upload/:id', cloudinaryHelper.single('avatar'),catchAsync( ProfileController.cloudinaryImage));
router.get('/inf/:id',catchAsync(ProfileController.getinf));
router.post('/addFollower/:id/:followerId', catchAsync(ProfileController.addfollower));
router.delete('/removeFollower/:id/:followerId', catchAsync(ProfileController.removefollower));
router.post('/addFollowing/:id/:followingId', catchAsync(ProfileController.addfollowing));
router.delete('/removeFollowing/:id/:followingId', catchAsync(ProfileController.removefollowing));

router.get('/getfollower/:id',catchAsync(ProfileController.followers));
router.get('/getfollowing/:id',catchAsync(ProfileController.following));

module.exports = router;