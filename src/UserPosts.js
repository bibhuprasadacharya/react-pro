import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserPosts = ({ userId }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const data = await response.json();
        setUserPosts(data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };

    fetchUserPosts();
  }, [userId]);

  return (
    <div className="user-posts">
      <h2>User Posts</h2>
      {userPosts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
const UserPosts = ({ userId }) => {
    return (
      <div className="user-posts">
        <h2>User Posts</h2>
        <p>User ID: {userId}</p>
        <Link to="/">Back to User Card</Link>
      </div>
    );
  };

export default UserPosts;
