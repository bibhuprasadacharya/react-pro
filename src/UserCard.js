import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="user-card">
      {userData ? (
        <div>
          <h3>{userData.name}</h3>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>City: {userData.address.city}</p>
          <p>Phone: {userData.phone}</p>
          <p>Company: {userData.company.name}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
const UserCard = ({ userId }) => {
    return (
      <div className="user-card">
        <h3>User Card</h3>
        <Link to={`/details/${userId}`}>Details</Link>
        <Link to={`/posts/${userId}`}>Posts</Link>
        <Link to={`/albums/${userId}`}>Albums</Link>
      </div>
    );
  };

export default UserCard;
