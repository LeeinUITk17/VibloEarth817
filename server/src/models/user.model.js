const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const COLLECTION_NAME="user";

const newSchema=new Schema({
   username:{
         type:String,
         required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        default:"none",
    },
    role:{
        type:String,
        default:"user",
        enum:["admin","user"],
    },
    avatar:{
        type:String,
        default:'none'
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