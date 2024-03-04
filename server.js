require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const productRoutes = require("./Routes/ProductRoutes")
const errorMiddleware = require('./Middleware/errormiddleware')
const app = express()



const PORT = process.env.PORT || 3006
const MONGO_URL = process.env.MONGODB_URL

app.use(errorMiddleware)
app.use(express.json()) // to parse the incoming requests with JSON)
app.use('/api/products', productRoutes)



mongoose.
connect(MONGO_URL)
.then(()=>{
    app.listen(PORT, function(){
        console.log("OKO lola elepon blue")
    })
    console.log("Omo Dekunle")
}).catch(err => console.log(err));