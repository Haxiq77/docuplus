import React from 'react';
import './LogoutPage.css';

const LogoutPage = () => {
  const handleBackToLogin = () => {
    // In a real application, this would redirect to the login page
    // For now, we'll just show an alert
    alert('Redirecting to login page...');
    // You could use window.location.href = '/login' or React Router here
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
