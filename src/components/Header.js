import React from 'react';
import './Header.css';

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <div className="header">
      <div className="header-content">
        <button 
          className="hamburger-menu"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
        >
          <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="header-title">
          <h1>DOCUPLUS</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
