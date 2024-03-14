import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserDetails = ({ userId }) => {
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
    <div className="user-details">
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
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
const UserDetails = ({ userId }) => {
    return (
      <div className="user-details">
        <h2>User Details</h2>
        <p>User ID: {userId}</p>
        <Link to="/">Back to User Card</Link>
      </div>
    );
  };
  

export default UserDetails;
