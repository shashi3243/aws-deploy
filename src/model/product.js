const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    productId:{
        type:String
    },
    name:{
        type:String
    }
})

const Product = new mongoose.model("product",productSchema)
module.exports = {
    Product
}