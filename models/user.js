const mongoose = require("mongoose")


const newUser = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      work: {
        type: String,
        enum: ['chef', 'manager', 'waiter'],
        required: true
      },

      username:{
        type:String,
        requried:true,

      },

      password:{
        type:String,
        required:true,
      }
      
})

const User = mongoose.model("User", newUser);

module.exports = User;