// src/Menu.js
import React, { useState } from 'react';
import './Menu.css';
import Services from './Services';
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Product from './Products';
import Order from './Order';

const Menu = () => {
  const [activePage, setActivePage] = useState('Null');

  return (
    <>
      <nav>
        <ul className="menu">
          <li><a href="#home" onClick={() => setActivePage('Home')}>Home</a></li>
          <li><a href="#about" onClick={() => setActivePage('About')}>About</a></li>
          <li><a href="#contact" onClick={() => setActivePage('Contact')}>Contact Us</a></li>
          <li><a href="#services" onClick={() => setActivePage('Services')}>Services</a></li>
          <li><a href="#product" onClick={() => setActivePage('Product')}>Product</a></li>
          <li><a href="#order" onClick={() => setActivePage('Order')}>Order</a></li>


        </ul>
      </nav>
      {activePage === 'Home' && <Home />}
      {activePage === 'About' && <About />}
      {activePage === 'Contact' && <Contact />}
      {activePage === 'Services' && <Services />}
      {activePage === 'Product' && <Product />}
      {activePage === 'Order' && <Order />}
    </>
  );
};





// const Contact = () => (
//   <div className="container">
//     <h1>Contact Us</h1>
//       <p>Get in touch with us for more information on;</p>
//       <p>Telephone: +256-783-648-245/ +256-785-765-436</p>
//       <p>Email: ogwalronald@gmail.com</p>

//       <h2>Social Media:</h2>
//       <p>Instagram: @raymondinvestmentlimited</p>
//       <p>Facebook: @raymondinvestmentlimited</p>
//       <p>Twitter: @raymondinvestmentlimited</p>

//       <h2>Office Hours:</h2>
//       <p>Monday to Friday</p>
//       <p>Time: 7:00am to 7:00pm</p>
//       <p>Saturday to Sunday</p>
//       <p>Time: 10:00am to 5:00pm</p>
//     </div>
// );



export default Menu;
