import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

 const placeOrder = () => {
  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    id: Date.now(),
    items: cart,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem(
    "orders",
    JSON.stringify(orders)
  );

  localStorage.removeItem("cart");

  alert("Order Placed Successfully 🎉");

  navigate("/order-success");
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout Page 💳</h1>

      <input placeholder="Enter Address" />
      <br />
      <br />

      <input placeholder="Phone Number" />
      <br />
      <br />

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;