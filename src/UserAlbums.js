import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserAlbums = ({ userId }) => {
  const [userAlbums, setUserAlbums] = useState([]);

  useEffect(() => {
    const fetchUserAlbums = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
        const data = await response.json();
        setUserAlbums(data);
      } catch (error) {
        console.error('Error fetching user albums:', error);
      }
    };

    fetchUserAlbums();
  }, [userId]);

  return (
    <div className="user-albums">
      <h2>User Albums</h2>
      {userAlbums.map(album => (
        <div key={album.id}>
          <h3>{album.title}</h3>
        </div>
      ))}
    </div>
  );
};
const UserAlbums = ({ userId }) => {
    return (
      <div className="user-albums">
        <h2>User Albums</h2>
        <p>User ID: {userId}</p>
        <Link to="/">Back to User Card</Link>
      </div>
    );
  };
  

export default UserAlbums;
