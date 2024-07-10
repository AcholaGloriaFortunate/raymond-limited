import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

// Import product images
import productImage1 from '../assets/cotton.jpg';
import productImage2 from '../assets/chiffon.jpg';
import productImage3 from '../assets/cotton towels.webp';
import productImage4 from '../assets/silk.jpg';
import productImage5 from '../assets/nylon.jpg';
import productImage6 from '../assets/linen.jpg';
import productImage7 from '../assets/chiffon.jpg';
import productImage8 from '../assets/satin.webp';
import productImage9 from '../assets/denim.webp';
import productImage10 from '../assets/chiffon.jpg';


// Define products array with image imports
const products = [
  {
    id: 1,
    name: 'Cotton',
    image: productImage1,
    color: 'All colors',
    price: 40000,
    price_unit: 'per inch'
  },
  {
    id: 2,
    name: 'Chiffon',
    image: productImage2,
    color: 'All colors',
    price: 35000,
    price_unit: 'per inch'
  },
  {
    id: 3,
    name: 'Cotton',
    image: productImage3,
    color: 'All colors',
    price: 30000,
    price_unit: 'per inch'
  },
  {
    id: 4,
    name: 'Silk',
    image: productImage4,
    color: 'All colors',
    price: 45000,
    price_unit: 'per inch'
  },
  {
    id: 5,
    name: 'Nylon',
    image: productImage5,
    color: 'All colors',
    price: 40000,
    price_unit: 'per inch'
  },
  {
    id: 6,
    name: 'Linen',
    image: productImage6,
    color: 'All colors',
    price: 40000,
    price_unit: 'per inch'
  },
  {
    id: 7,
    name: 'Chiffon',
    image: productImage7,
    color: 'All colors',
    price: 26000,
    price_unit: 'per inch'
  },
  {
    id: 8,
    name: 'Denim',
    image: productImage8,
    color: 'All colors',
    price: 37000,
    price_unit: 'per inch'
  },
  {
    id: 9,
    name: 'Satin',
    image: productImage9,
    color: 'All colors',
    price: 60000,
    price_unit: 'per inch'
  },
  {
    id: 10,
    name: 'Chiffon',
    image: productImage10,
    color: 'All colors',
    price: 33000,
    price_unit: 'per inch'
  }
];

const Product = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="product-price">{product.price}</p>
          <Link to={`/order/${product.id}`} className="order-button">
            Order Now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;









