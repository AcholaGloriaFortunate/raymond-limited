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
    status: 'Pending', // Default status
    order_date: new Date().toISOString().slice(0, 10) // Default order_date to today
  });

  useEffect(() => {
    // Fetch product details based on productId (optional, depends on your app flow)
    // This can be done via axios call if needed
    // For demonstration purpose, assume selected product based on productId
    const product = {
      id: 1, // Replace with actual product fetching logic
      name: 'Sample Product', // Replace with actual product name
      price: 'shs. 100,000' // Replace with actual product price format
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
      const response = await axios.post('/api/v1/orders/create', {
        product_id: parseInt(productId),
        quantity: order.quantity,
        total_price: order.total_price,
        status: order.status,
        order_date: order.order_date,
      });
      console.log(response.data); // Handle success response
      alert('Order placed successfully!');
      // Reset form fields after successful submission
      setOrder({
        quantity: 1,
        total_price: 0,
        status: 'Pending',
        order_date: new Date().toISOString().slice(0, 10)
      });
    } catch (error) {
      console.error('Error:', error.response.data); // Handle error response
    }
  };

  if (!selectedProduct) return <p>Loading...</p>; // Handle loading state

  return (
    <div className="order-form-container">
      <h2>Place Your Order for {selectedProduct.name}</h2>
      <p>Price: {selectedProduct.price}</p>
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
        <div className="form-group">
          <label htmlFor="total_price">Total Price:</label>
          <input
            type="number"
            id="total_price"
            name="total_price"
            value={order.total_price}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={order.status}
            onChange={handleChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="order_date">Order Date:</label>
          <input
            type="date"
            id="order_date"
            name="order_date"
            value={order.order_date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Order;



