import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import OrderSuccess from "./pages/OrderSuccess";
import OrderHistory from "./pages/OrderHistory";
import ProductDetails from "./pages/ProductDetails";

import "./App.css";

function App() {
  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
    
  // Add to cart with quantity logic
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id);

      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />
<Route
  path="/cart"
  element={
    <ProtectedRoute>
      <Cart cart={cart} setCart={setCart} />
    </ProtectedRoute>
  }
/>
       <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
  path="/order-success"
  element={<OrderSuccess />}
/>
<Route
  path="/orders"
  element={<OrderHistory />}
/>
<Route
  path="/product/:id"
  element={<ProductDetails />}
/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;