// src/Order.js

import React, { useState } from 'react';
import './Order.css';

const products = [
  { id: 1, name: 'Product 1', price: 'shs. 100,000' },
  { id: 2, name: 'Product 2', price: 'shs. 3,000' },
  { id: 3, name: 'Product 3', price: 'shs. 20,000' },
];

const Order = () => {
  const [order, setOrder] = useState({
    name: '',
    address: '',
    product: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', order);
    alert('Order placed successfully!');
    // Here you would typically send the order data to the server
    setOrder({
      name: '',
      address: '',
      product: '',
      quantity: 1,
    });
  };

  return (
    <div className="order-form-container">
      <h2>Place Your Order</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={order.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={order.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Product:</label>
          <select
            id="product"
            name="product"
            value={order.product}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name} - {product.price}
              </option>
            ))}
          </select>
        </div>
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
