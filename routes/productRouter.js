import express from "express";
//import Product from "../models/products.js";
import { createProduct, deleteProduct, getProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.delete("/:productId", deleteProduct)

export default productRouter;