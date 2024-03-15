import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./UserDetails.css"; // Import CSS for styling

const UserDetails = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
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
          {/* Link to view posts */}
          <Link to={`/posts/${userId}`} className="btn">
            View Posts
          </Link>
          <br />
          {/* Link to view albums */}
          <Link to={`/albums/${userId}`} className="btn">
            View Albums
          </Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserDetails;
