const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "Gaming Laptop",
    price: 999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    category: "Laptop",
  },
  {
    name: "Smart Phone",
    price: 699,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    category: "Mobile",
  },
  {
    name: "Wireless Headphones",
    price: 199,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Audio",
  },
  {
    name: "Smart Watch",
    price: 249,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Wearable",
  },
  {
    name: "Mechanical Keyboard",
    price: 129,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    category: "Accessories",
  },
  {
    name: "Gaming Mouse",
    price: 79,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    category: "Accessories",
  },
  {
    name: "4K Monitor",
    price: 399,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500",
    category: "Monitor",
  },
  {
    name: "Bluetooth Speaker",
    price: 149,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    category: "Audio",
  },
  {
    name: "iPad Tablet",
    price: 599,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    category: "Tablet",
  },
  {
    name: "DSLR Camera",
    price: 899,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    category: "Camera",
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Added Successfully ✅");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();