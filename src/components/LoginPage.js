import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login process
    console.log('Login attempt:', formData);
    // Call the onLogin callback to navigate back to main app
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          {/* Logo and Welcome */}
          <div className="login-header">
            <div className="logo">DOCUPLUS</div>
            <p className="welcome-text">Welcome to DocuPlus</p>
          </div>

          {/* Illustration */}
          <div className="illustration">
            <div className="office-scene">
              <div className="professionals">
                <div className="person person-1">👨‍💼</div>
                <div className="person person-2">👩‍💼</div>
                <div className="person person-3">👨‍💻</div>
                <div className="person person-4">👩‍💻</div>
              </div>
              <div className="table">📊</div>
            </div>
          </div>

          {/* Login Form */}
          <div className="login-form">
            <p className="signin-text">Please sign-in to your account</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email or Username</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email or username"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  Remember Me
                </label>
              </div>

              <button type="submit" className="login-btn">
                LOG IN
              </button>
            </form>

            <div className="create-account">
              <p>New on our platform? <a href="#" className="create-link">Create an account</a></p>
            </div>

            <div className="db-status">
              <div className="status-label">DB Status:</div>
              <div className="status-connected">CONNECTED (MASTER, TENANT)</div>
              <div className="status-details">
                <div>connected to: MasterDataTemplateDB</div>
                <div>connected to:</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
