const express = require("express")

const app = express()

const db = require("./db")
const bodyParser = require("body-parser")

const passport = require("passport")
const localStragey= require("passport-local").Strategy;

const User = require("./models/user")










app.use(bodyParser.json())



// authentication 

app.use(new localStragey(async(username, password , done)=>{
    
    try {

        const user = await User.findOne({username:username})

    if (!username ){
       return done(null, false , {message:"Incorrect Username "})
    }

    const ispassport = User.password == password ? true:false;

    if(ispassport){
        return done (null, user)

    }else{
        return done (null, false , {message:"Incorrect Password"});
    }
        
    } catch (error) {

        return done (error);
        
    }
}))




//middleware of the Log Request

const logRequest = (req,res, next)=>{
    console.log(`[${new Date().toLocaleString()}] `)
    next();
}

app.use(logRequest)


app.get("/", (req,res)=>{
    res.send("Welcome to the hotel")
})


//routes path 

const UserRoutes = require("./routes/userRoutes")

const MenuRoutes = require("./routes/menuRoutes")

app.use("/user", UserRoutes);
app.use("/menu", MenuRoutes);

app.listen(3000, ()=>[
    console.log("Listening the port properly")
])