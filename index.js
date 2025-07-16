import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const app = express()

//Middleware to parse JSON bodies
app.use(express.json())

app.use(
    (req, res, next)=>{
        
    const token = (req.header("Authorization"))?.replace("Bearer ", "")
    console.log(token)

    if(token != null){
        jwt.verify(token, process.env.SECRET, (error, decoded)=>{
            if(!error){
                req.user = decoded
            }
        })
    }
    next()

    }
)

//Connection String
const connectionString = process.env.MONGO_DB_URL

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected.")
    }
).catch(
    ()=>{
        console.log("Database connection failed.")
    }
)


app.use("/api/products", productRouter)
app.use("/api/users", userRouter)

app.listen(5000, ()=>{ 
    console.log("Server is started.")
    console.log("Thanks.")
})


