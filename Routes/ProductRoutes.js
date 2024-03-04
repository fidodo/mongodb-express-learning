const express = require('express');
const Product = require("../Models/productModels")
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct}= require("../Controller/productController")


// test if the get endpoint is working properly
// router.get("/", function(req,res){
//     res.send("I am baba ibeji")
// })

// Get all products from the database and send them back as a response 
router.get("/", getProducts)


   // get a product from the database and send them back as a response
   router.get("/:id", getProduct) 

// Create a new product in the database using the data sent through the request body
router.post("/", createProduct)

// update a product
router.put("/:id", updateProduct)


// Delete a product
router.delete('/:id', deleteProduct);


module.exports = router