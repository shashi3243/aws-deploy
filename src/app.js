const express = require("express")
require("dotenv").config({path:`.env.${process.env.NODE_ENV}`})
const app = express()
const port = process.env.PORT



app.get("/", (req,res)=>{
return res.status(200).json({
messsage:"Welcome to my apk"
})
})


app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})