import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/textiles images.jpg'; // Correct path to the image
import product1 from '../assets/textiles images.jpg'; // Correct path to the image
import product2 from '../assets/polyester.webp'; // Correct path to the image
import product3 from '../assets/chiffon.jpg'; // Correct path to the image

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Welcome to Our Textile Store</h1>
          <p>Discover the finest fabrics and accessories</p>
          <div className="auth-buttons">
            <Link to="/signup" className="cta-button">Sign Up</Link>
            <Link to="/login" className="cta-button">Login</Link>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="products-section">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={product1} alt="Product 1" />
            <h3>Product 1</h3>
            <p>High-quality fabric</p>
          </div>
          <div className="product-card">
            <img src={product2} alt="Product 2" />
            <h3>Product 2</h3>
            <p>Elegant apparel</p>
          </div>
          <div className="product-card">
            <img src={product3} alt="Product 3" />
            <h3>Product 3</h3>
            <p>Stylish accessories</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>We are dedicated to providing the highest quality textiles</p> 
        <p>and apparel. Our mission is to bring elegance and style to your</p>
        <p>wardrobe.</p>
        <Link to="/about" className="about-link">Learn More About Us</Link>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>Customer Reviews</h2>
        <div className="testimonial">
          <p>"Great quality and amazing customer service!" - Mbabazi Angel</p>
        </div>
        <div className="testimonial">
          <p>"The best fabrics I've ever used!" - Businge Ashely</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/product">Product</Link>
          <Link to="/review">Reviews</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;











