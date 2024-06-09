require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const stripe = require("stripe")(`${process.env.SECRET_KEY}`);

const express = require("express");
// require("./db")
const { Product, User } = require("./model");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  return res.status(200).json({
    messsage: "I have updated jenkins for deployement.",
  });
});


// app.post('/github-webhook', (req, res) => {
//     // console.log("")
//     // Handle webhook payload
//     res.status(200).send('Webhook received');
// });

app.post("/createProduct", async (req, res) => {
  const data = await stripe.products.create({
    name: "indian product",
  });
  const createProductData = await Product.create({
    productId: data?.id,
    name: data?.name,
  });
  return res.json({
    message: "ok",
    data: createProductData,
  });
});

app.post("/createPrice", async (req, res) => {
  const price = await stripe.prices.create({
    currency: "inr",
    unit_amount: 1000,
    recurring: {
      interval: "year",
    },
    product: "prod_Q1yBWRZI9BW93I",
  });
  return res.json({
    message: "ok",
    data: price,
  });
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
