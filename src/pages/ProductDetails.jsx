import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

useEffect(() => {
  console.log("ID from URL:", id);

  axios
    .get("https://shophub-ecommerce-7gbt.onrender.com/api/products")
    .then((res) => {
      console.log("Products:", res.data);

      const found = res.data.find(
        (item) => item._id === id
      );

      console.log("Found Product:", found);

      setProduct(found);
      if (!product) {
  return <h2>Product Not Found</h2>;
}
    })
    .catch((err) => {
      console.log(err);
    });
}, [id]);
  if (!product) return <h2>Loading...</h2>;

  const handleBuyNow = () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(
      (item) => item._id === product._id
    );

    if (!exists) {
      cart.push({
        ...product,
        quantity: 1,
      });

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );
    }

    navigate("/checkout");
  };

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => navigate("/products")}
        style={{
          marginBottom: "20px",
          padding: "8px 15px",
        }}
      >
        ← Back to Products
      </button>

      <div>
        <img
          src={product.image}
          alt={product.name}
          width="350"
          style={{
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        />

        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p>⭐⭐⭐⭐⭐ (4.8/5)</p>

        <p>
          <strong>Category:</strong>{" "}
          {product.category}
        </p>

        <p>
          This is a premium quality product with
          excellent performance and modern features.
        </p>

        <button
          onClick={handleBuyNow}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Buy Now 💳
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;