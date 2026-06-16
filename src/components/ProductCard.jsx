import { useNavigate } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  const navigate = useNavigate();

  const addToWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
      (item) => item._id === product._id
    );

    if (!exists) {
      wishlist.push(product);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );

      alert("Added to Wishlist ❤️");
    } else {
      alert("Already in Wishlist");
    }
  };

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => navigate(`/product/${product._id}`)}
        style={{
          cursor: "pointer",
          width: "100%",
          borderRadius: "10px",
        }}
      />

      <h3>{product.name}</h3>

      <p className="price">₹{product.price}</p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <button onClick={() => addToCart(product)}>
          Add to Cart 🛒
        </button>

        <button onClick={addToWishlist}>
          ❤️ Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;