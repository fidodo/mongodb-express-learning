const express = require("express")
const mongoose = require("mongoose")
const Product = require("./Models/productModels")
const app = express()


app.use(express.json()) // to parse the incoming requests with JSON)

// test if the get endpoint is working properly
app.get("/", function(req,res){
    res.send("I am baba ibeji")
})

// Get all products from the database and send them back as a response 
app.get("/products", async function(req,res){
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
   })


   // get a product from the database and send them back as a response
   app.get("/products/:id", async function(req,res){
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
 
   })

// Create a new product in the database using the data sent through the request body
app.post("/products", async function(req,res){
 try {
const product= await Product.create(req.body)
res.status(200).json(product)
 }catch(error){
    console.log(error.message)
    res.status(500).json({message: error.message})
 }
})

// update a product
app.put("/products/:id", async function(req,res){
    try {
    const {id} = req.params;
    const update = await Product.findByIdAndUpdate(id, req.body);

    // we can not find the product to update
    if(!update) {
        return res.status(404).json({message: `Product not found in database with ID ${id}`})      
    }
    const updatedproduct = await Product.findById(req.params.id) 
    res.status(200).json(updatedproduct)
} catch (error){
    res.status(500).json({message: error.message})
}
})


// Delete a product
app.delete('/products/:id', async function(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id);
        
        // Check if the product was deleted
        if (!deleted) {
            return res.status(404).json({ message: 'No product with that id was deleted' });
        }
        
        // Product deleted successfully, return the deleted product
        res.status(200).json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


mongoose.
connect("mongodb+srv://dedondodo:Mayo101315@cluster.tfyhmc5.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(()=>{
    app.listen(3006, function(){
        console.log("OKO lola elepon blue")
    })
    console.log("Omo Dekunle")
}).catch(err => console.log(err));