const bcrypt = require('bcrypt');
const usermodel = require('../models/user.model');
const tokenmodel=require('../models/token.model');
const jwt = require('jsonwebtoken'); 

const doenv=require('dotenv');
doenv.config();

const saveRefreshToken=async(token,userid)=>{
  try {
    const newToken=new tokenmodel({token,userid});
    const savedToken= await newToken.save();
    return savedToken;
  } catch (error) {
    console.error(error);
    throw new Error('Token save failed');
  }
}

const register = async (body) => {
  try {
      const user = new usermodel(body);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
     return await user.save();
  } catch (error) {
      console.error(error);
      throw new Error('Registration failed');
  }
}

const refreshAccessToken=async(userid)=>{
    const user=await usermodel.findById(userid);
    if(!user){
      throw new Error('User not found');
    }
    const userWithoutPassword = { ...user._doc, password: undefined };
    const accessToken=jwt.sign(userWithoutPassword, process.env.JWT_TOKEN_SECRET,{expiresIn: '15m'});
    return accessToken;
  }

const login = async (req, body) => { 
  try {
    const { username, password } = body;
    const user = await usermodel.findOne({ username });
    if (!user) {
      throw new Error('Invalid username or password');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid username or password');
    }
    const userWithoutPassword = { ...user._doc, password: undefined };
    const existingToken=await tokenmodel.findOne({userid:user._id, expireAt: { $gt: new Date() }});
    console.log(existingToken);
    let accessToken,refreshToken

    if(existingToken){
      accessToken=jwt.sign(userWithoutPassword, process.env.JWT_TOKEN_SECRET,{expiresIn: '15m'});
      refreshToken=existingToken.token;
    }else{
      accessToken=jwt.sign(userWithoutPassword, process.env.JWT_TOKEN_SECRET,{expiresIn: '15m'});
      refreshToken=jwt.sign({id:user._id}, process.env.JWT_TOKEN_SECRET,{expiresIn:'7d'});
      await saveRefreshToken(refreshToken,user._id);
     
    }
    
    return {accessToken,refreshToken};
  } catch (error) {
    console.error(error);
    throw new Error('Login failed');
  }
}

module.exports = {
  login,
  register,
  saveRefreshToken,
  refreshAccessToken,
}