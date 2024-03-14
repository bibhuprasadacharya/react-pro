import React from 'react';
import './App.css';
import UserCard from './UserCard';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import UserAlbums from './UserAlbums';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserDashboard from './UserDashboard';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route path="/" component={UserDashboard} />
      </div>
    </Router>
  );
};
const App = () => {
  return (
    <div className="app">
      <h1>User Dashboard</h1>
      <div className="user-card-container">
        <UserCard userId={1} />
      </div>
      <div className="user-details-container">
        <UserDetails userId={1} />
        <UserPosts userId={1} />
        <UserAlbums userId={1} />
      </div>
    </div>
  );
};

export default App;
