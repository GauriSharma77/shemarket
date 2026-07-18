import "../App.css";
//import GrowthChart from "../GrowthChart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
const entrepreneurs = [
 
  {
    name: "Asha Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    orders: 125,
    sales: "₹42,000",
    city: "Delhi"
  },

  {
    name: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    orders: 108,
    sales: "₹37,500",
    city: "Jaipur"
  },

  {
    name: "Neha Gupta",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    orders: 97,
    sales: "₹31,000",
    city: "Chandigarh"
  },

  {
    name: "Kavya Singh",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    orders: 91,
    sales: "₹28,000",
    city: "Mumbai"
  }
];
  return (
    <div>

      <nav className="navbar">
        <h2 className="logo">💜 She Market</h2>

        <div className="nav-links">
  <Link to="/">Home</Link>

  <a href="#about">About Us</a>

  <Link to="/products">Products</Link>

  <Link to="/login">Login</Link>
</div>
      </nav>

      <section className="hero">

        <div className="hero-left">
          <h1>Empowering Women Entrepreneurs</h1>

          <p>
          Empowering women entrepreneurs through quality products, creativity, and opportunities to grow their businesses.
          </p>
<button onClick={() => navigate("/products")}>
  Explore Products
</button>
          <button>Become a Seller</button>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98"
            alt="Woman Entrepreneur"
            width="450"
          />
        </div>

      </section>
      <hr className="section-divider" />
<section id="about" className="about">

  <h1>About She Market</h1>

  <p>
    She Market is more than just an online marketplace—it is a community built to support both women entrepreneurs and customers. We provide women-led businesses with the tools and visibility needed to reach a wider audience, grow their brands, and achieve financial independence. At the same time, we help customers discover quality products that are handcrafted, creative, and unique. Our goal is to create a trusted platform where sellers can expand their businesses, customers can find exceptional products, and both can benefit from a seamless and rewarding shopping experience.
  </p>


<div className="about-highlights">

  <div className="highlight-card">
    <h3>👩 Women Entrepreneurs</h3>
    <p>Helping women-led businesses grow and reach more customers.</p>
  </div>

  <div className="highlight-card">
    <h3>🛍️ Quality Products</h3>
    <p>Discover authentic, creative, and high-quality products.</p>
  </div>

  <div className="highlight-card">
    <h3>🤝 Trusted Experience</h3>
    <p>Creating a reliable marketplace for both sellers and buyers.</p>
  </div>

</div>
</section>
      {/* Stats Section */}
      <hr className="section-divider" />
  <h1 className="features-heading">
  Our Features
</h1>
      <section className="stats">
    
        <div className="stat-card">
          <h2>100+</h2>
          <p>Women Sellers</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Products Listed</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Cities Reached</p>
        </div>

        <div className="stat-card">
          <h2>1000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Seller Satisfaction</p>
        </div>

      </section>
      <hr className="section-divider" />

{/* <GrowthChart /> */}

<section className="entrepreneurs">
  <hr className="section-divider" />

  <h1>🌟 Star Sellers of the Month</h1>

  <p className="seller-text">
    Celebrating our top-performing women entrepreneurs of this month.
  </p>

  <div className="entrepreneur-container">

    {entrepreneurs.map((person, index) => (

      <div className="entrepreneur-card" key={index}>

        <img
          src={person.image}
          alt={person.name}
        />

        <h3>{person.name}</h3>

        <p>📦 {person.orders} Orders</p>

        <p>💰 {person.sales} Sales</p>

        <p>📍 {person.city}</p>

        <button>Visit Store</button>

      </div>

    ))}

  </div>

</section>
<hr className="section-divider" />
<footer className="footer">

  <div className="footer-content">

    <div className="footer-section">
      <h3>💜 She Market</h3>
      <p>
        Empowering women entrepreneurs by connecting them with customers across India.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>
      <p>Home</p>
      <p>Products</p>
      <p>Sellers</p>
      <p>Login</p>
    </div>

    <div className="footer-section">
      <h3>Contact</h3>
      <p>support@shemarket.com</p>
      <p>+91 98765 43210</p>
      <p>India</p>
    </div>

  </div>

  <hr />

  <p className="copyright">
    © 2026 She Market. All Rights Reserved.
  </p>

</footer>
    </div>
    
  );
}

export default Home;