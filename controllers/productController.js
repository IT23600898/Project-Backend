import Product from "../models/product.js";


export async function getProduct(req, res){

    try{
    const productList = await Product.find()

    res.json({
        list : productList
    })
    }catch(e){
        res.json({
            message : "Error"
        })
    }
}


// export function getProduct(req, res){

//     Product.find().then(
//         (productList)=>{
//             res.json({
//                 productList
//             })
//         }
//     ).catch(
//         ()=>{
//             res.json({
//                 message: "Error"
//             })
//         }
//     )
// }

export function createProduct(req, res){

    console.log(req.user)

    if(req.user == null){
        res.json({
            message: "You are not logged in."
        })
        return
    }

    if(req.user.type != "admin"){
        res.json({
            message: "You are not an admin"
        })
        return
    }

    const product = new Product({

        name: req.body.name,
        price : req.body.price,
        description : req.body.description
    })

    product.save().then(()=>{
        res.json({
            message: "Product created."
        })
    }).catch(()=>{
        res.json({
            message: "Product not created."
        })
    })
}

export function deleteProduct(req, res){
    Product.deleteOne({name: req.params.name}).then(()=>{
        res.json({
            message: "Product delete successfull."
        })
        
    }).catch(()=>{
        res.json({
            message: "Product delete unsuccessfully."
        })
    })
}

export function getProductByName(req, res){
     const name = req.params.name;

     Product.find({name : name}).then(
        (productList)=>{
        res.json({
            list : productList
        })
     }).catch(()=>{
        res.json({
            message: "Error"
        })
     })
}