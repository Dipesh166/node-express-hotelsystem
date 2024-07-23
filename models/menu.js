const mongoose = require("mongoose")


const MenuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    dish:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:['spicy', 'sweet','sour'],
       required:true,
    }
})

const Menu = mongoose.model('Menu',MenuSchema )

module.exports = Menu;