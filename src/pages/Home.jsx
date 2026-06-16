import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Next Generation Shopping Experience</h1>

        <p>
          Discover premium electronics,
          accessories and modern gadgets
          with fast delivery and great prices.
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Home;
    