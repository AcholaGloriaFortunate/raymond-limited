<<<<<<< HEAD
// src/App.js

import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
=======
import React from 'react';
import './App.css';
import Menu from './components/Menu';

>>>>>>> 4c51a7e7f76861c45169905c87cb10196eded8a8
import logo from './assets/loogoo.png';
import FacebookLoginButton from './components/FacebookLoginButton';
import Dashboard from './components/Dashboard';


function App() {
<<<<<<< HEAD
  const [user, setUser] = useState(null);
  // Handle Facebook login response
  const handleLogin = (userData) => {
    // Check if the userData contains the necessary information
    if (userData && userData.accessToken) {
      setUser(userData);  // Update the user state with the response data
    } else {
      console.error('Failed to login');
    }
  };


  // const handleLogin = (userData) => {
  //   setUser(userData);
  // };

=======
>>>>>>> 4c51a7e7f76861c45169905c87cb10196eded8a8
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<<<<<<< HEAD
        {/* <h1>Facebook Monitoring App</h1> */}
        {!user ? (
          <FacebookLoginButton onLogin={handleLogin} />
        ) : (
          <Dashboard user={user} />
        )}
=======
>>>>>>> 4c51a7e7f76861c45169905c87cb10196eded8a8
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
      <Menu />
<<<<<<< HEAD
      
=======
>>>>>>> 4c51a7e7f76861c45169905c87cb10196eded8a8
    </div>
  );
}

export default App;
