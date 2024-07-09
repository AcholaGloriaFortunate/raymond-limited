import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Order.css';

const Order = () => {
  const { productId } = useParams(); // Get the productId from URL params
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [order, setOrder] = useState({
    quantity: 1, // Default quantity
    total_price: 0, // Initialize total_price
  });

  useEffect(() => {
    // For demonstration purpose, assume selected product based on productId
    const product = {
      id: 1, // Replace with actual product fetching logic
      name: 'Sample Product', // Replace with actual product name
      price: 100000, // Replace with actual product price
    };
    setSelectedProduct(product); // Set the selected product state
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Fetch JWT token from localStorage

      const response = await axios.post(
        'http://127.0.0.1:5000/api/v1/orders/create',
        {
          product_id: parseInt(productId),
          quantity: order.quantity,
          total_price: selectedProduct.price * order.quantity, // Calculate total price
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Set Authorization header with Bearer token
          },
        }
      );

      console.log(response.data); // Handle success response
      alert('Order placed successfully!');
      // Reset form fields after successful submission
      setOrder({
        quantity: 1,
        total_price: 0,
      });
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message); // Handle error response
      alert('Failed to place order. Please try again.');
    }
  };

  if (!selectedProduct) return <p>Loading...</p>; // Handle loading state

  return (
    <div className="order-form-container">
      <h2>Place Your Order for {selectedProduct.name}</h2>
      <p>Price: shs. {selectedProduct.price}</p>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={order.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Order;

