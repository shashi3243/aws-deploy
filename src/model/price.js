const mongoose = require("mongoose")
const priceSchema = mongoose.Schema({
    priceId:{
        type:String
    },
    currency:{
        type:String
    },
    interval:{
        type:String
    }
})

const Price = new mongoose.model("price",priceSchema)
module.exports = {
    Price
}