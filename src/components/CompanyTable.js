import React, { useState } from 'react';
import './CompanyTable.css';

const CompanyTable = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'Zus Coffee',
      state: 'Choose state...',
      reminder: true
    },
    {
      id: 2,
      name: 'KFC Sdn Bhd',
      state: 'Choose state...',
      reminder: true
    },
    {
      id: 3,
      name: 'HP Sdn Bhd',
      state: 'Choose state...',
      reminder: true
    },
    {
      id: 4,
      name: 'Black Sdn Bhd',
      state: 'Choose state...',
      reminder: true
    },
    {
      id: 5,
      name: 'Sig Tax & Accouting Pte Ltd',
      state: 'Choose state...',
      reminder: true
    }
  ]);

  const malaysianStates = [
    'Choose state...',
    'Johor',
    'Kedah',
    'Kelantan',
    'Kuala Lumpur',
    'Labuan',
    'Malacca',
    'Negeri Sembilan',
    'Pahang',
    'Penang',
    'Perak',
    'Perlis',
    'Putrajaya',
    'Sabah',
    'Sarawak',
    'Selangor',
    'Terengganu'
  ];

  const handleStateChange = (id, newState) => {
    setCompanies(prev => 
      prev.map(company => 
        company.id === id ? { ...company, state: newState } : company
      )
    );
  };

  const handleReminderToggle = (id) => {
    setCompanies(prev => 
      prev.map(company => 
        company.id === id ? { ...company, reminder: !company.reminder } : company
      )
    );
  };

  const handleCreateCompany = () => {
    const newCompany = {
      id: companies.length + 1,
      name: 'New Company',
      state: 'Choose state...',
      reminder: false
    };
    setCompanies([...companies, newCompany]);
  };

  const handleDeleteCompany = (id) => {
    setCompanies(prev => prev.filter(company => company.id !== id));
  };

  return (
    <div className="company-table-section">
      {/* Search and Create Company Section */}
      <div className="middle-section">
        <div className="search-section">
          <label className="search-label">Search:</label>
          <input type="text" className="search-input" placeholder="Search companies..." />
        </div>
        <button className="create-company-btn" onClick={handleCreateCompany}>+ Create Company</button>
      </div>

      {/* Company List Table */}
      <div className="table-section">
        <table className="company-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Teams</th>
              <th>Set Reminder</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td>
                  <div className="company-name-cell">
                    <div className="company-name">{company.name}</div>
                  </div>
                </td>
                <td>
                  <div className="group-tags">
                    <select 
                      className="state-dropdown-inline"
                      value={company.state}
                      onChange={(e) => handleStateChange(company.id, e.target.value)}
                    >
                      {malaysianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </td>
                <td>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={company.reminder}
                      onChange={() => handleReminderToggle(company.id)}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <button className="action-btn enter-btn">Enter</button>
                  <button 
                    className="action-btn delete-btn"
                    onClick={() => handleDeleteCompany(company.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
            <span className="pagination-info">Showing 7 of 21</span>
            <div className="pagination-controls">
              <button className="pagination-btn">Prev</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">Next</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CompanyTable;