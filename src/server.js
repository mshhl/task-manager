const exp = require("constants");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT;

app.listen(port,() =>{
    console.log("listerning to port "+ port);
})