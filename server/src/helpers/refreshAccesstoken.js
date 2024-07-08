const {
    verifyToken,
}=require('./jwt.helper');
const {
    refreshAccessToken,
}=require('../services/login.service');
const refreshAccess=async (token)=>{ 
    try {
        const decoded=verifyToken(token);
        if(decoded){
            const newAccessToken=await refreshAccessToken(decoded.id);
            return newAccessToken;
        }
    }catch(error){
        throw error;
    }
}
module.exports ={
    refreshAccess,
 };
