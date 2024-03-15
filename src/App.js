import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserCard from "./UserCard";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";
import UserAlbums from "./UserAlbums";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserCard />} />
        <Route path="/details/:userId" element={<UserDetails />} />
        <Route path="/posts/:userId" element={<UserPosts />} />
        <Route path="/albums/:userId" element={<UserAlbums />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
