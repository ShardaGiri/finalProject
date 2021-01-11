const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const productRoutes = require('./routes/productRoute')
connectDB();

// //envirnment variable
// env.config()

//routes
//Middleware between get and post
//app.use(express.json())     Instead of Express we can use better library that is BODYPARSER
// app.use(bodyParser.json())
// app.use("/api" , userRoutes)     //Every req is prefix with api

app.use(bodyParser.json())
app.use(cors());
app.use("/api/products" , productRoutes)  
app.use("/users", require("./routes/userRouter"));

//Creating Simple server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));