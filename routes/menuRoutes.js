const express = require('express')

const router = express.Router();

const Menu = require("../models/menu")


// post the menu data 

router.post("/", async(req,res)=>{

    try {

        const data = req.body;

    const newMenu = new Menu(data);

    const response = await newMenu.save();

    console.log("Menu is post")
    res.status(200).json(response);
        
    } catch (error) {

        console.log(error)
        res.status(500).json({error:"Internal server error"})
        
    }

})


//get the menu 

router.get("/:dishType",async(req,res)=>{

    try {

        const dishType = req.params.dishType;

        if(dishType === "spicy" || dishType === "sweet" || dishType === "sour"){

            const response = await Menu.find({type:dishType}) 
            console.log("Dish is Displayed")
            res.status(200).json(response)

            
        }
     
    } catch (error) {

        console.log(error)
        res.status(500).json({error:"Internal Server Error"})

        
    }




})


// update 
router.put("/:id", async(req,res)=>{
    try {

        const menuitem = req.params.id;
        const menuItemUpdate = req.body;

        const response = await Menu.findByIdAndUpdate(menuitem, menuItemUpdate,{
            new:true,
            runValidators:true,
        })

        if(!response){
            console.log("Dish is not found ")
            res.status(404).json({error:'Dish is not found '})

        }

        console.log("Dish is updated")
        res.status(200).json(response)


        
    } catch (error) {

        console.log(error)
        res.status(500).json({error:"Internal server error "})
        
    }
})


module.exports= router;


