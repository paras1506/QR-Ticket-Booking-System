import React from 'react';

function UserProfile({ user }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      {/* Add more profile information here */}
    </div>
  );
}

export default UserProfile;
