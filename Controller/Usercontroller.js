import Usermodel from '../Model/Usermodel.js'
const register=async(req,res)=>{
    try {
        const existingUser = await Usermodel.findOne({ userId: req.body.userId });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }

    const newuser=await Usermodel({...req.body,varified:true})
    await newuser.save();
    res.status(201).send("new user registered successfully");

    } catch (error) {
       console.log(error) 
    }
}

const login=async(req,res)=>{
    try {
   const {userId,password}=req.body
   const user=await Usermodel.findOne({userId,password,varified:true})
   if(user){
    res.status(200).send(user)

   }else{
    res.json({
        message:"login fail",
        user
    })
   }
    } catch (error) {
      console.log(error)  
    }
}

// const getCustomers = async (req, res) => {
//     try {
//         const customers = await Usermodel.find();
//         res.status(200).send(customers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal server error");
//     }
// };

export{register,login}