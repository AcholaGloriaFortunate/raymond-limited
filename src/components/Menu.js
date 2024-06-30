import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Menu.css';
import Home from './Home';
import Product from './Product'; // Import the Product component
import Review from './Review'; // Import the Review component
import SignUpForm from './Auth'; // Assuming Auth.js contains SignUpForm
import LoginForm from './Auth2'; // Assuming Auth2.js contains LoginForm
import Services from './Services'; // Import Services component
import About from './About'; // Import About component

// Import Order component and its CSS
import Order from './Order';
import './Order.css';

const Menu = () => {
  return (
    <Router>
      <nav>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/product">Product</a></li>
          <li><a href="/review">Reviews</a></li> {/* Add link to Review component */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Route to SignUpForm and LoginForm */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Route to Services and About components */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        {/* Route to Product component */}
        <Route path="/product" element={<Product />} />

        {/* Route to Order component without adding to navigation */}
        <Route path="/order/:productId" element={<Order />} />

        {/* Route to Review component */}
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default Menu;



