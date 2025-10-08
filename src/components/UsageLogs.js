import React, { useState } from 'react';
import './UsageLogs.css';

const UsageLogs = () => {
  const [logs] = useState([
    {
      id: 1,
      timestamp: '23:09 [12/05/2024]',
      company: 'Smart Filing Sdn Bhd',
      action: 'Company created',
      performedBy: 'Jeff'
    },
    {
      id: 2,
      timestamp: '23:09 [12/05/2024]',
      company: 'Smart Filing Sdn Bhd',
      action: 'Uploaded file [Audit → Bank statements → February.pdf]',
      performedBy: 'Jeff'
    },
    {
      id: 3,
      timestamp: '23:09 [12/05/2024]',
      company: 'Smart Filing Sdn Bhd',
      action: 'Created new weekly custom reminder',
      performedBy: 'Jeff'
    },
    {
      id: 4,
      timestamp: '22:45 [12/05/2024]',
      company: 'Tech Solutions Sdn Bhd',
      action: 'User permission updated',
      performedBy: 'Sarah'
    },
    {
      id: 5,
      timestamp: '22:30 [12/05/2024]',
      company: 'Tech Solutions Sdn Bhd',
      action: 'Template created [Monthly Report]',
      performedBy: 'Sarah'
    },
    {
      id: 6,
      timestamp: '21:15 [12/05/2024]',
      company: 'Global Corp Sdn Bhd',
      action: 'File deleted [Old Documents → Archive.pdf]',
      performedBy: 'Mike'
    }
  ]);

  const [filterCompany, setFilterCompany] = useState('');
  const [filterUser, setFilterUser] = useState('');

  const filteredLogs = logs.filter(log => 
    (filterCompany === '' || log.company.toLowerCase().includes(filterCompany.toLowerCase())) &&
    (filterUser === '' || log.performedBy.toLowerCase().includes(filterUser.toLowerCase()))
  );

  return (
    <div className="usage-logs-page">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Usage Logging activity</h1>
        <p className="page-subtitle">Track all user activities and system events</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <label className="filter-label">Filter by Company:</label>
          <input
            type="text"
            className="filter-input"
            placeholder="Search companies..."
            value={filterCompany}
            onChange={(e) => setFilterCompany(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label className="filter-label">Filter by User:</label>
          <input
            type="text"
            className="filter-input"
            placeholder="Search users..."
            value={filterUser}
            onChange={(e) => setFilterUser(e.target.value)}
          />
        </div>
        <button 
          className="clear-filters-btn"
          onClick={() => {
            setFilterCompany('');
            setFilterUser('');
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Logs Table */}
      <div className="table-section">
        <div className="table-container">
          <table className="logs-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Company</th>
                <th>Actions</th>
                <th>Performed by</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td className="timestamp-cell">{log.timestamp}</td>
                  <td className="company-cell">{log.company}</td>
                  <td className="action-cell">{log.action}</td>
                  <td className="performed-by-cell">{log.performedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsageLogs;
