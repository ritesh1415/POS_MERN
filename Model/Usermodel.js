import mongoose from "mongoose";
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
      userId:{
        type:String,
        required:true
    },
    varified:{
        type:Boolean
    }
},{timestamp:true})

const Users=mongoose.model('users',UserSchema)
export default Users