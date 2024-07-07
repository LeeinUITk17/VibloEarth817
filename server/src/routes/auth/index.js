const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {
    verifyToken,
} = require('../../helpers/jwt.helper');
const {
    refreshAccess,
}=require('../../helpers/refreshAccesstoken');


const {catchAsync}=require('../../utils/catchAsync');

router.use(async (req, res, next) => {
    const accessToken = req.cookies.jwt;
    const refreshToken = req.cookies.refreshJwt;

    if (accessToken) {
        try {
            const decoded = verifyToken(accessToken);
            req.user = decoded;
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                res.clearCookie('jwt');
                if (refreshToken) {
                    try {
                        const newAccessToken = await refreshAccess(refreshToken);
                        if (newAccessToken && typeof newAccessToken === 'string') {
                            console.log('add new access token');
                            res.cookie('jwt', newAccessToken, { httpOnly: true });

                            const decoded = verifyToken(newAccessToken);
                            if (decoded) {
                                req.user = decoded;
                            }
                        }
                    } catch (refreshErr) {
                        console.error('Error refreshing access token:', refreshErr);
                    }
                }
            } else {
                console.error('Error verifying access token:', err);
            }
        }
    }

    next();
});



router.get('/', catchAsync(async (req, res) => {
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