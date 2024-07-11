// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/${user.id}/posts?access_token=${user.accessToken}`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (user) {
      fetchPosts();
    }
  }, [user]);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <img src={user.picture.data.url} alt="profile" />
      <p>Email: {user.email}</p>

      <h2>Your Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;





// src/components/Dashboard.js

//import React from 'react';


//const Dashboard = ({ user }) => {
//   return (
//     <div>
//       <h1>Welcome, {user.name}</h1>
//       <img src={user.picture.data.url} alt="profile" />
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

//export default Dashboard;