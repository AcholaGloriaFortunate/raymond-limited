import React from 'react';
import ContactForm from './Contactform';
const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Get in touch with us for more information on;</p>
      <p>Telephone: +256-783-648-245/ +256-785-765-436</p>
      <p>Email: ogwalronald@gmail.com</p>

      <h2>Social Media:</h2>
      <p>Instagram: @raymondinvestmentlimited</p>
      <p>Facebook: @raymondinvestmentlimited</p>
      <p>Twitter: @raymondinvestmentlimited</p>

      <h2>Office Hours:</h2>
      <p>Monday to Friday</p>
      <p>Time: 7:00am to 7:00pm</p>
      <p>Saturday to Sunday</p>
      <p>Time: 10:00am to 5:00pm</p>
      <ContactForm/>
    </div>
  );
};

export default Contact;
