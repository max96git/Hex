import React from 'react';

const Avatar = ({ match }) => {
  return (
    <div>
      <h2>Avatar of User {match.params.userId}</h2>
      {/* Avatar customization code goes here */}
    </div>
  );
};

export default Avatar;
