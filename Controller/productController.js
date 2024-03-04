const Product = require("../Models/productModels")

// get all products
const getProducts = async function(req,res){
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
   }

   // get  a  product
   const getProduct =async function(req,res){
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
 
   }

   // create product
   const createProduct =async function(req,res){
    try {
   const product= await Product.create(req.body)
   res.status(200).json(product)
    }catch(error){
       console.log(error.message)
       res.status(500).json({message: error.message})
    }
   }

   // correct product info
   const updateProduct = async function(req,res){
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
}

// delete product
const deleteProduct = async function(req, res) {
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
}

   module.exports ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct, 
    deleteProduct
   }