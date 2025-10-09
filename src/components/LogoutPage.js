import React from 'react';
import './LogoutPage.css';

const LogoutPage = ({ onNavigateToLogin }) => {
  const handleBackToLogin = () => {
    if (onNavigateToLogin) {
      onNavigateToLogin();
    } else {
      // Fallback: redirect to login page
      window.location.href = '/login';
    }
  };

  return (
    <div className="logout-page">
      <div className="logout-container">
        <div className="logout-content">
          <div className="logout-icon">
            👍
          </div>
          <h1 className="logout-message">
            You've successfully <span className="logout-emphasis">Logged out</span>.
          </h1>
          <button 
            className="back-to-login-btn"
            onClick={handleBackToLogin}
          >
            Back to Login
          </button>
        </div>
        <div className="logout-footer">
          <span className="notifications-text">NOTIFICATIONS</span>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
