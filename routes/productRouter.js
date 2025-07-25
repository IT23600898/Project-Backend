import express from "express";
import Product from "../models/products";
import { createProduct, getProducts } from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);

export default productRouter;