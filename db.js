const mongoose = require("mongoose")

const MongoUrl = "mongodb://localhost:27017/HotelDishes"

mongoose.connect(MongoUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("Connected to the Database")
})

module.exports =db;