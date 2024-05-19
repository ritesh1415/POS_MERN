import express from 'express'
import {  addcontroller, deletecontroller, getitem } from '../Controller/Itemcontroller.js';
import { editcontroller } from '../Controller/Itemcontroller.js';
import {  login, register } from '../Controller/Usercontroller.js';
import {billcontroller,  Getbills } from '../Controller/Billcontroller.js';
const router=express.Router();
router.get('/get-item', getitem)
router.post('/add',addcontroller)
router.put('/edit',editcontroller)
router.post('/delete',deletecontroller)
router.get('/login',login)
router.post('/register',register)

//get customer
//Bill routes

router.post('/bill',billcontroller)
router.get('/get-bill',Getbills)
export default router