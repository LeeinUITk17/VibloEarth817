const {
    verifyToken,
}=require('./jwt.helper');
const {
    refreshAccessToken,
}=require('../services/login.service');
const refreshAccess=async (token)=>{
    const decoded=verifyToken(token);
    if(decoded){
        const newAccessToken=await refreshAccessToken(decoded.id);
        return newAccessToken;
    }
   return null;
}
module.exports ={
    refreshAccess,
 };
