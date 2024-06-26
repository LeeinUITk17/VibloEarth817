const express = require('express');
const router = express.Router();
const {
    verifyToken,
} = require('../../helpers/jwt.helper');

const {catchAsync}=require('../../utils/catchAsync');

router.use((req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        const decoded = verifyToken(token);
        if (decoded) {
            req.user = decoded;
        }
    }
    next();
});



router.get('/',catchAsync(async (req, res) => {
   return res.json(req.user);
}));
router.get('/check',catchAsync(async (req, res) => {
    if(req.user){
        return res.json({isLoggedIn:true});
    }else{
        return res.json({isLoggedIn:false});
    }
}));


module.exports = router;