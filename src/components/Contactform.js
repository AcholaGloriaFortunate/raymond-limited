// src/components/ContactForm.js
import React, { useState } from 'react';
import './Contactform.css';
//import './Contact'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Your email address will not be published. All fields are required.</h2>
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Get in touch with us for more information on:</p>
        <div className="contact-info-group">
          <label>Telephone:</label>
          <p>+256-783-648-245 / +256-785-765-436</p>
        </div>
        <div className="contact-info-group">
          <label>Email:</label>
          <p>ogwalronald@gmail.com</p>
        </div>
        <div className="contact-info-group">
          <label>Social Media:</label>
          <p>Instagram: @raymondinvestmentlimited</p>
          <p>Facebook: @raymondinvestmentlimited</p>
          <p>Twitter: @raymondinvestmentlimited</p>
        </div>
        <div className="contact-info-group">
          <label>Office Hours:</label>
          <p>Monday to Friday: 7:00am to 7:00pm</p>
          <p>Saturday to Sunday: 10:00am to 5:00pm</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Telephone:
          <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
