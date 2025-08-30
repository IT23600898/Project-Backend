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
  alternativeName: [ // array of alternative names
    {
      type: [String],
      required: true
    }
  ],
  images: { // array of image URLs or paths
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
  stock: { // new stock field
    type: Number,
    required: true,
    min: 0 // prevents negative stock values
  },
  description: {
    type: String,
    required: true
  }
});

const Product = mongoose.model("products", productSchema);

export default Product;
