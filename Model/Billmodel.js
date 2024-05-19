import mongoose from "mongoose";
const Billschema=mongoose.Schema({
    customername:{
        type:String,
        required:true
    },
    customernumber:{
        type:Number,
        required:true
    },
    totalamount:{
        type:Number,
        required:true
    },
    subtotal:{
        type:Number,
        required:true
        
    },
    tax:{
        type:Number,
        required:true
    },
    paymentmode:{
        type:String,
        required:true
    },
    CartItems:{
    type:Array,
    required:true
},
createdAt: {
    type: Date,
    default: Date.now 
}

},{timestamp:true})

const Bills=mongoose.model('Bills',Billschema)
export default Bills