import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.js";
import Student from "./models/student.js";
import studentRouter from "./routes/studentRouter.js"
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";

const app = express()

//Middleware to parse JSON bodies
app.use(express.json())

app.use(
    (req, res, next)=>{
        
    const token = (req.header("Authorization"))?.replace("Bearer ", "")
    console.log(token)

    if(token != null){
        jwt.verify(token, "cbc-secret-key-1025", (error, decoded)=>{
            if(!error){
                req.user = decoded
            }
        })
    }
    next()

    }
)

//Connection String
const connectionString = "mongodb+srv://admin:123@cluster0.2trhny1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected.")
    }
).catch(
    ()=>{
        console.log("Database connection failed.")
    }
)

app.use("/api/students", studentRouter)
app.use("/api/products", productRouter)
app.use("/api/users", userRouter)

app.listen(5000, ()=>{ 
    console.log("Server is started.")
    console.log("Thank you.")
})


