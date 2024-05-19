import Billmodel from '../Model/Billmodel.js'
const billcontroller=async(req,res)=>{
    try {
    const newBill=new Billmodel(req.body)
    await newBill.save() 
    res.status(201).send("bill created successfully")   
    } catch (error) {
      console.log(error)  
    }
}  

const Getbills=async(req,res)=>{
    try {
     const bills=await Billmodel.find();
     res.status(200).send(bills)   
    } catch (error) {
      console.log(error)  
    }
}
export { billcontroller,Getbills}