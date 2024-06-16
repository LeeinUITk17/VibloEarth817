const express = require('express');
const contactController = require('../../controllers/contact.controller');
const router = express.Router();

const {catchAsync}=require('../../utils/catchAsync');

router.post('/',catchAsync(contactController.sendContactMail));

module.exports = router;