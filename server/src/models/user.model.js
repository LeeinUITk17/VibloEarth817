const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const COLLECTION_NAME="user";

const newSchema=new Schema({
   username:{
         type:String,
         required:true,
    },
    name:{
      type:String,
      default:"Mr.Sunday",  
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        default:"none",
    },
    phone:{
        type: String,
        default:"0356356497",
    },
    followers: [{
        type: String
    }],
    following: [{
        type: String
    }],
    role:{
        type:String,
        default:"user",
        enum:["admin","user"],
    },
    avatar:{
        type:String,
        default:'https://res.cloudinary.com/dbonwxmgl/image/upload/v1717061277/xesgw0ilky3wbrj9xixd.jpg'
    },
    status:{
        type:String,
        default:"inactive",
        enum:["active","inactive"],
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
},
{
    timestamps:true,
    collection:COLLECTION_NAME,
}
);
module.exports=mongoose.model(COLLECTION_NAME,newSchema);