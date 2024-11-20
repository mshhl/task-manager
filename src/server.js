const exp = require("constants");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const authenticationRouter = require("../router/userRoute/authenticationRouter");
const session = require("express-session");

app.use(session({
    secret:process.env.TOKEN_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}

}))

// we set the view engine and view directory
app.set("views","./views")
app.set("view engine","ejs");
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// main routers
app.use("/",authenticationRouter);

const port = process.env.PORT;

app.listen(port,() =>{
    console.log("listerning to port "+ port);
})