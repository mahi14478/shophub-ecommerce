import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // 🔼 Increase quantity
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item._id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // 🔽 Decrease quantity
  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ❌ Remove item
  const removeItem = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // 💰 Total
  const getTotal = () => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                borderBottom: "1px solid #ddd",
                padding: "10px 0",
              }}
            >
              <img src={item.image} width="80" />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                {/* Quantity Controls */}
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <button onClick={() => decreaseQty(item._id)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQty(item._id)}>
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(item._id)}
                style={{ color: "red" }}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{getTotal()}</h2>

          <button
            onClick={() => navigate("/checkout")}
            style={{
              padding: "10px 20px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;