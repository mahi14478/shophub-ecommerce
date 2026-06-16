import { useState, useEffect } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(saved);
  }, []);

  const removeWishlist = (id) => {
    const updated = wishlist.filter(
      (item) => item._id !== id
    );

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button
              onClick={() =>
                removeWishlist(item._id)
              }
            >
              ❌ Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;