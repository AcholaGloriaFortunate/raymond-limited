import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        contact: '',
        email: '',
        password: '',
        image: null,
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
    
      try {
        const response = await axios.post('http://localhost:5000/api/v1/auth/register', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
    
        console.log('Response:', response.data); // Log the entire response
    
        if (response.status === 201) {
          alert('Sign up successful!');
          setFormData({
            first_name: '',
            last_name: '',
            contact: '',
            email: '',
            password: '',
            image: null,
            location: ''
          });
        } else {
          console.error('Unexpected status code:', response.status);
          alert('Sign up failed. Please try again.');
        }
    
      } catch (error) {
        console.error('Error:', error); // Log the error object
        alert('Sign up failed. Please try again.');
      }
    };
    

    return (
        <div className="sign-up-form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="first_name">First Name:</label>
                    <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name:</label>
                    <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact:</label>
                    <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;

