import mongoose from "mongoose";
import dotenv from 'dotenv'
import connectionDB from "./Config/Config.js";
import Itemmodel from './Model/Itemmodel.js'
import Items from "./Model/Itemmodel.js";
import items from "./Utills/Data.js";

dotenv.config();
connectionDB();
const importData= async()=>{
    try {
   await Itemmodel.deleteMany() 
   const itemData=await Items.insertMany(items)
   console.log(`item data saved `)  
   process.exit() 
    } catch (error) {
     console.log(`${error}`)   
    }
}
importData();