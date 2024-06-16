const express = require('express');
const loginController = require('../../controllers/login.controller');
const router = express.Router();


const {catchAsync}=require('../../utils/catchAsync');

router.get('/out',catchAsync(loginController.logout));

router.post('/',catchAsync(loginController.login));
router.post('/add',catchAsync(loginController.register));

module.exports = router;