import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import './CompanyDetailsSidebar.css';

const CompanyDetailsSidebar = ({ onNavigate, currentPage }) => {
  const [expandedYears, setExpandedYears] = useState({
    2021: false,
    2022: false,
    2023: false
  });

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <div className="company-details-sidebar">
      <div className="sidebar-header">
        <div className="header-content">
          <h1 className="logo">DOCUPLUS</h1>
          <div 
            className="home-icon"
            onClick={() => onNavigate('dashboard')}
            title="Go to Dashboard"
          >
            <FaHome />
          </div>
        </div>
      </div>
      
      {/* Year-based Navigation */}
      <div className="year-navigation">
        <div className="year-section">
          <div className="year-header" onClick={() => toggleYear(2021)}>
            <h3 className="year-title">2021</h3>
            <span className={`year-arrow ${expandedYears[2021] ? 'rotated' : ''}`}>></span>
          </div>
          {expandedYears[2021] && (
            <div className="year-categories">
              <div className="category-item">
                <span className="category-name">Tax</span>
                <span className="category-numbers">
                  <span className="green-number">45</span>
                  <span className="separator">/</span>
                  <span className="red-number">3</span>
                </span>
              </div>
              <div className="category-item">
                <span className="category-name">Audit</span>
                <span className="category-numbers">
                  <span className="green-number">38</span>
                  <span className="separator">/</span>
                  <span className="red-number">7</span>
                </span>
              </div>
              <div className="category-item">
                <span className="category-name">Account</span>
                <span className="category-numbers">
                  <span className="green-number">52</span>
                  <span className="separator">/</span>
                  <span className="red-number">2</span>
                </span>
              </div>
              <div className="category-item">
                <span className="category-name">Secretary</span>
                <span className="category-numbers">
                  <span className="green-number">28</span>
                  <span className="separator">/</span>
                  <span className="red-number">5</span>
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="year-section">
          <div className="year-header" onClick={() => toggleYear(2022)}>
            <h3 className="year-title">2022</h3>
            <span className={`year-arrow ${expandedYears[2022] ? 'rotated' : ''}`}>></span>
          </div>
          {expandedYears[2022] && (
            <div className="year-categories">
              <div className="category-item">
                <span className="category-name">Tax</span>
                <span className="category-numbers">
                  <span className="green-number">67</span>
                  <span className="separator">/</span>
                  <span className="red-number">4</span>
                </span>
              </div>
              <div className="category-item">
                <span className="category-name">Audit</span>
                <span className="category-numbers">
                  <span className="green-number">55</span>
                  <span className="separator">/</span>
                  <span className="red-number">6</span>
                </span>
              </div>
              <div className="category-item">
                <span className="category-name">Account</span>
                <span className="category-numbers">
                  <span className="green-number">71</span>
                  <span className="separator">/</span>
                  <span className="red-number">3</span>
                </span>
              </div>
              <div className="category-item">
                <span className="category-name">Secretary</span>
                <span className="category-numbers">
                  <span className="green-number">42</span>
                  <span className="separator">/</span>
                  <span className="red-number">8</span>
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="year-section">
          <div className="year-header" onClick={() => toggleYear(2023)}>
            <h3 className="year-title">2023</h3>
            <span className={`year-arrow ${expandedYears[2023] ? 'rotated' : ''}`}>></span>
          </div>
          {expandedYears[2023] && (
            <div className="year-categories">
              <div className="category-item">
                <span className="category-name">Tax</span>
                <span className="category-numbers">
                  <span className="green-number">89</span>
                  <span className="separator">/</span>
                  <span className="red-number">2</span>
                </span>
              </div>
              <div className="category-item">
                <span className="category-name">Audit</span>
                <span className="category-numbers">
                  <span className="green-number">76</span>
                  <span className="separator">/</span>
                  <span className="red-number">5</span>
                </span>
              </div>
              <div className="category-item">
                <span className="category-name">Account</span>
                <span className="category-numbers">
                  <span className="green-number">94</span>
                  <span className="separator">/</span>
                  <span className="red-number">1</span>
                </span>
              </div>
              <div className="category-item">
                <span className="category-name">Secretary</span>
                <span className="category-numbers">
                  <span className="green-number">58</span>
                  <span className="separator">/</span>
                  <span className="red-number">4</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default CompanyDetailsSidebar;
