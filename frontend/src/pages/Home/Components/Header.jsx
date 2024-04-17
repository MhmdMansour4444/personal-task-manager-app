import React from 'react';

const Header = ({ username }) => {
  const handleLogout = () => {
    
  };

  return (
    <div className="header">
      <div className="user-info">
        <span>Welcome, {username}</span>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
