// src/components/FacebookLoginButton.js

import React from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = ({ onLogin }) => {
  // Function to handle Facebook response
  const responseFacebook = (response) => {
    console.log(response); // Log the response to see the structure
    onLogin(response);    // Call the onLogin prop with the response data
  };

  return (
    <FacebookLogin
      appId="847358987246152"  // Replace with your Facebook App ID
      autoLoad={false}       // Set to true if you want to auto-login users
      fields="name,email,picture"  // Request these fields from Facebook
      callback={responseFacebook}  // Callback function to handle the response
      icon="fa-facebook"   // Facebook icon for the button
    />
  );
};

export default FacebookLoginButton;
