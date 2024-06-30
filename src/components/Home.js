import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website!</h1>
      <p>Explore our services, products, and more.</p>
      <div className="button-container">
        {/* Links to SignUpForm and LoginForm */}
        <Link to="/signup">Sign Up</Link><br></br>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Home;







