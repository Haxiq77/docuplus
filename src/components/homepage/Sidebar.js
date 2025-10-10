import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ onNavigate, currentPage, isOpen = true }) => {
  const navItems = [
    { id: 'company-info', icon: '🏢', text: 'Company information' },
    { id: 'user-settings', icon: '⚙️', text: 'User & Accessibility Settings' },
    { id: 'templates', icon: '🔔', text: 'Templates & reminders' },
    { id: 'usage-logs', icon: '📊', text: 'Usage Logs' },
    { id: 'api-integration', icon: '🔗', text: 'API Integration' },
    { id: 'billing-invoice', icon: '🧾', text: 'Billing & Invoice' },
    { id: 'logout', icon: '❌', text: 'Log out' }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="header-content">
          <h1 className="logo">DOCUPLUS</h1>
          <div 
            className="home-icon"
            onClick={() => onNavigate('homepage')}
            title="Go to Homepage"
          >
            <FaHome />
          </div>
        </div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div 
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.text}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
