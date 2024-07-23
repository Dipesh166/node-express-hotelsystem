const express = require("express")

const router = express.Router();
const User = require("../models/user")
const body = require("body-parser");
const bodyParser = require("body-parser");



//post
router.post("/", async(req,res)=>{
    try {

        const data = req.body;

        const newUser = new User(data)

        const response = await newUser.save()

        console.log("dATA IS POST")
        res.status(200).json(response)
        


    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server Error"})
        
    }
})






//get

router.get("/:workType", async (req ,res)=>{
    try {
        const workType = req.params.workType;

        if(workType === "chef" || workType === "manager" || workType === "waiter"){

            const response = await User.find({work:workType})
            console.log("Data is viewed");
            res.status(200).json(response)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal error "})
        
    }

} )



// update given data 

router.put("/:id", async(req,res)=>{
    try {
        const UserId = req.params.id;
        const UpdateUserdata = req.body;

        const response = await User.findByIdAndUpdate(UserId, UpdateUserdata, {
            new:true,
            runValidators:true
        })

        if(!response){
            console.log("User is not found")
        res.status(404).json({error:"User not found"})
        }


        console.log("data is updated")
        res.status(200).json(response)


    } catch (error) {
        console.log(error)
        res.status(200).json({error:"Internal sever error"})
        
    }
})




module.exports = router;