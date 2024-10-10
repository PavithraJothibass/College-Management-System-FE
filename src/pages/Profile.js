// src/pages/Profile.js
import React from 'react';

const Profile = ({ user }) => (
  <div className="p-4 bg-white shadow rounded-lg">
    <h2 className="text-xl font-semibold">Profile</h2>
    <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Major:</strong> {user.major}</p>
  </div>
);

export default Profile;
