import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectionDB from './Config/Config.js'
import mongoose from 'mongoose'
import Itemroutes from './Routes/Itemroutes.js'
dotenv.config()
 const app=express();
 app.use(cors("http//localhost:3000"))
 app.use(express.json())
 app.use(Itemroutes)
 const PORT=process.env.PORT || 8080
 mongoose.connect(process.env.MONGO_URL)
 .then(() => {
   app.listen(PORT, () => {
       connectionDB();
       console.log(`Running on PORT ${PORT}`);
   });
})
.catch(error => console.error(`Error connecting to MongoDB: ${error}`));
