const mongoose = require("mongoose")

mongoose.connect(process.env.URL).then(()=>{
    console.log("db connected successsfully")
}).catch(()=>{
    console.log("db not connected")
})