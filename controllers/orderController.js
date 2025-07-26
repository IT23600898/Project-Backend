import Order from "../models/order.js"

export async function createOrder(res, req){

    //take the latest product id
    try{
        const latestOrder = await Order.find().sort({date : -1}).limit(1)

        

    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
}
