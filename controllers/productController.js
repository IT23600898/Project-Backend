import Product from "../models/products";
import { isAdmin } from "./userController";

export function createProduct(req, res){
    
    if(!isAdmin(req)){
        res.json({
            message: "Please login as a administrator to add products"
        })
    }
    const newProductData = req.body

    const product = new Product(newProductData)

    product.save().then(()=>{
        res.json({
            message: "Product Created."
        })
    }).catch((error)=>{
        res.json({
            message: error
        })
    })
}

