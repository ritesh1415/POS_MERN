import express from 'express'
import Itemmodel from '../Model/Itemmodel.js'

const getitem=async(req,res)=>{
    try {
      const items=await Itemmodel.find();
      res.status(200).send({
        success:true,
        message:"data  get successfully",
        items
      })
    } catch (error) {
        console.log(error)
    }
}
const addcontroller=async(req,res)=>{
  try {
    const newItem=new Itemmodel(req.body);
    await   newItem.save();
    res.status(201).send({
      success:true,
      message:"data added successfully",
      newItem
    })
  } catch (error) {
   console.log(error) 
   message:error.message
  }
}
const editcontroller=async(req,res)=>{
  try {
    await Itemmodel.findOneAndUpdate({_id:req.body.itemId},req.body);
    res.status(201).send("item updated")
  } catch (error) {
    res.status(400).send(error)
    console.log(error)
  }
}
const deletecontroller=async(req,res)=>{
  try {
    const {itemId}=req.body;
    await Itemmodel.findOneAndDelete({_id:itemId})
    res.status(200).send("item deleted")

  } catch (error) {
    console.log(error)
  }
}

export { getitem,addcontroller,editcontroller,deletecontroller}