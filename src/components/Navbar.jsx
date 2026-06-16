import { Link } from "react-router-dom";

function Navbar({ cartCount = 0 }) {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">ShopHub</div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/about">About</Link>

        <Link to="/cart">
          Cart ({cartCount})
        </Link>

        <Link to="/wishlist">
          Wishlist ❤️
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span className="welcome-user">
              Hi, {userName || "User"}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;