import React, { useState } from 'react';
import axios from 'axios';
import './Review.css'; // Ensure you have your CSS file imported

const Review = ({ productId }) => {
  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/reviews/create', {
        ...formData,
        product_id: productId // Pass productId received as prop
      });
      console.log(response.data); // Handle success response
      // Optionally, reset form fields after successful submission
      setFormData({
        rating: '',
        comment: ''
      });
    } catch (error) {
      console.error('Error:', error.response.data); // Handle error response
    }
  };

  return (
    <div className="review-container">
      <h2>Write a Review</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows="4"
          required
        />

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Review;

