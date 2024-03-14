import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserCard from './UserCard';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import UserAlbums from './UserAlbums';

const UserDashboard = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UserCard} />
        <Route path="/details/:userId" component={UserDetails} />
        <Route path="/posts/:userId" component={UserPosts} />
        <Route path="/albums/:userId" component={UserAlbums} />
      </Switch>
    </div>
  );
};

export default UserDashboard;
