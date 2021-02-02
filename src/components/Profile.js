import React from 'react';
import PropTypes from 'prop-types';
const Profile = ({ posts, messages, _id, username }) => (
  <div>
    <p>Posts: {posts}</p>
    <p>messages: {messages}</p>
    <p>_id: {_id}</p>
    <p>username: {username}</p>
  </div>
)
Profile.proptypes = {
  posts: PropTypes.array,
  messages: PropTypes.array,
  _id: PropTypes.string,
  username: PropTypes.string, 
};

export default Profile;