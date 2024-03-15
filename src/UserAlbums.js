// UserAlbums.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Albums.css"; // Import CSS for styling

const UserAlbums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}/albums`
        );
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [userId]);

  return (
    <div className="user-albums">
      <h2>User Albums</h2>
      <div className="album-grid">
        {albums.map((album) => (
          <div key={album.id} className="album-card">
            <h3>{album.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAlbums;
