const bcrypt = require('bcrypt');
const usermodel = require('../models/user.model');
const jwt = require('jsonwebtoken'); 

const doenv=require('dotenv');
doenv.config();
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
    const auth = jwt.sign(userWithoutPassword, process.env.JWT_TOKEN_SECRET);
    return auth;
  } catch (error) {
    console.error(error);
    throw new Error('Login failed');
  }
}

module.exports = {
  login,
  register,
}