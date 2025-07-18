import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  alternativeName: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  lastPrice: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Product =  mongoose.model("products", productSchema);

export default Product;