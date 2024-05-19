import mongoose from "mongoose";
const connectionDB=async()=>{
    try {
     const conn=mongoose.connect(process.env.MONGO_URL)   
     console.log(`database connected successfully`);
    } catch (error) {
        console.log(`ERRor: ${error.message}`);
    }
}
export default connectionDB