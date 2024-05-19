import mongoose from "mongoose";
const itemSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:false
    },
    image:{
        type:String,
        required:true
    }
},{timestamp:true})

const Items=mongoose.model('Items',itemSchema)
export default Items