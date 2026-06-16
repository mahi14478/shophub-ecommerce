import { useEffect, useState } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(saved);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 Order History</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>Order Date: {order.date}</h3>

            {order.items.map((item) => (
              <div key={item._id}>
                <p>
                  {item.name} - ₹{item.price}
                </p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;