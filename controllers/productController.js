import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

//  function isAdmin(req){
//         return req.user && req.use.role === "admin";
//     }

   export function createProduct(req, res){
   
    if(!isAdmin(req)){
        res.json({
            message: "Please login as a administrator to add products"
        })
        return
    }

    const newProductData = req.body

    const product = new Product(newProductData)

    product.save().then(()=>{
        res.json({
            message: "Product Created."
        })
    }).catch((error)=>{
        res.status(403).json({
            message: error
        })
    })
}

export function getProducts(req, res){

    Product.find().then(
        (productList)=>{
            res.json({
                List: productList
            })
        }
    ).catch((error)=>{
        res.json({
            message: error
        })
    })
}

export function deleteProduct(req, res){
    if(!isAdmin(req)){
        res.status(403).json({
            message: "Please login a administrator to delete products"
        })
        return
    }
    const productId = req.params.productId

    Product.deleteOne(
        {productId : productId}
    ).then(()=>{
        res.status(200).json({
            message: "Product Deleted."
        })
    }).catch((err)=>{
        res.status(500).json({
            message: err
        })
    })

}
