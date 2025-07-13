import express from 'express';
import { createProduct, deleteProduct, getProduct, getProductByName } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/", getProduct)

productRouter.post("/", createProduct)

productRouter.delete("/:name", deleteProduct)

productRouter.get("/:name", getProductByName)

export default productRouter;