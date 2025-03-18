const express = require("express")
const mongooseConnectionDB = require("./config/database")
require('dotenv').config()

const app = express()
const port = process.env.PORT_CONNECTION || 3000

app.listen(port,()=>{
    console.log(`Port running ${port}`);    
})

mongooseConnectionDB()