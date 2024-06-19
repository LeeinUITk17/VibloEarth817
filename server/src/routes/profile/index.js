const express = require('express');
const ProfileController = require('../../controllers/profile.controller');
const router = express.Router();

const {catchAsync}=require('../../utils/catchAsync');
const {cloudinaryHelper}=require('../../helpers/cloudinary.helper');



router.post('/update/:id',catchAsync(ProfileController.updateprofile));
router.post('/upload/:id', cloudinaryHelper.single('avatar'),catchAsync( ProfileController.cloudinaryImage));
router.get('/inf/:id',catchAsync(ProfileController.getinf));

module.exports = router;