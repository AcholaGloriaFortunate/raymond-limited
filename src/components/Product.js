import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'; // Optional: For styling

// Import your images
import productImage1 from '../assets/product1.jpg';
import productImage2 from '../assets/product2.jpg';
import productImage3 from '../assets/product3.jpg';
import productImage4 from '../assets/product4.jpg';
import productImage5 from '../assets/product5.jpg';
import productImage6 from '../assets/product6.jpg';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: productImage1,
    description: 'This is a description for materials for school uniforms, hospital beddings, and uniforms.',
    price: 'shs. 100,000 per roll',
  },
  {
    id: 2,
    name: 'Product 2',
    image: productImage2,
    description: 'These are threads and buttons used for tailoring.',
    price: 'shs. 3,000 each',
  },
  {
    id: 3,
    name: 'Product 3',
    image: productImage3,
    description: 'This is a description for clothes.',
    price: 'shs. 20,000 each',
  },
  {
    id: 4,
    name: 'Product 4',
    image: productImage4,
    description: 'This is a description for tablecloths.',
    price: 'shs. 20,000 each',
  },
  {
    id: 5,
    name: 'Product 5',
    image: productImage5,
    description: 'This is a description for checked materials.',
    price: 'shs. 180,000 per roll',
  },
  {
    id: 6,
    name: 'Product 6',
    image: productImage6,
    description: 'This is a description for polo-shirts.',
    price: 'shs. 20,000 per roll',
  },
];

const Product = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="product-price">{product.price}</p>
          <Link to={`/order/${product.id}`} className="order-button">Order Now</Link> {/* Link to order page with product ID */}
        </div>
      ))}
    </div>
  );
};

export default Product;



