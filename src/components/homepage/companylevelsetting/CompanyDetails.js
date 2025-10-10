import React, { useState } from 'react';
import CompanyDetailsSidebar from './CompanyDetailsSidebar';
import './CompanyDetails.css';

const CompanyDetails = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('tax');
  const [showSlidePage, setShowSlidePage] = useState(false);
  const [slidePageTab, setSlidePageTab] = useState('company-info');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [clientUsers, setClientUsers] = useState([
    {
      id: 1,
      name: 'Mr Lee',
      email: 'zyliew93@gmail.com',
      phone: '012-3456798',
      department: 'Accounts',
      emailReminder: true,
      whatsappReminder: false,
      twoFA: false
    }
  ]);
  const [engagements, setEngagements] = useState([
    {
      id: 1,
      task: 'Tax Documents',
      description: 'Tax must be pdf before submit.',
      files: 'File field',
      status: 'Status',
      uploadBy: 'Upload By',
      approvedBy: 'Approved By'
    },
    {
      id: 2,
      task: 'Tax Returns',
      description: 'Tax must be pdf before submit.',
      files: 'File field',
      status: 'Status',
      uploadBy: 'Upload By',
      approvedBy: 'Approved By'
    }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setEngagements(prev => 
      prev.map(engagement => 
        engagement.id === id ? { ...engagement, status: newStatus } : engagement
      )
    );
  };

  const handleUploadByChange = (id, newUploadBy) => {
    setEngagements(prev => 
      prev.map(engagement => 
        engagement.id === id ? { ...engagement, uploadBy: newUploadBy } : engagement
      )
    );
  };

  const handleApprovedByChange = (id, newApprovedBy) => {
    setEngagements(prev => 
      prev.map(engagement => 
        engagement.id === id ? { ...engagement, approvedBy: newApprovedBy } : engagement
      )
    );
  };

  const handleAddEngagement = () => {
    const newEngagement = {
      id: engagements.length + 1,
      task: 'New Engagement',
      description: 'Enter description here.',
      files: 'File field',
      status: 'Status',
      uploadBy: 'Upload By',
      approvedBy: 'Approved By'
    };
    setEngagements([...engagements, newEngagement]);
  };

  const handleDeleteEngagement = (id) => {
    setEngagements(prev => prev.filter(engagement => engagement.id !== id));
  };

  const handlePersonClick = () => {
    setShowSlidePage(true);
  };

  const handleCloseSlidePage = () => {
    setShowSlidePage(false);
  };

  const handleAddClientUser = () => {
    const newUser = {
      id: clientUsers.length + 1,
      name: 'New User',
      email: 'user@example.com',
      phone: '012-0000000',
      department: 'Accounts',
      emailReminder: false,
      whatsappReminder: false,
      twoFA: false
    };
    setClientUsers([...clientUsers, newUser]);
  };

  const handleEditClientUser = (id) => {
    // Edit functionality can be implemented here
    console.log('Edit user:', id);
  };

  const handleDeleteClientUser = (id) => {
    setClientUsers(prev => prev.filter(user => user.id !== id));
  };

  const handleUserChange = (id, field, value) => {
    setClientUsers(prev => 
      prev.map(user => 
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="company-details-layout">
      <CompanyDetailsSidebar 
        onNavigate={onNavigate} 
        currentPage="company-details" 
        isOpen={isSidebarOpen}
        onToggle={handleToggleSidebar}
      />
      <div className={`company-details-page ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Company Details</h1>
        </div>

      {/* Client Information */}
      <div className="client-info-section">
        <div className="client-header">
          <div className="client-details">
            <h2 className="client-name">Zuss Coffee Sdn. Bhd.</h2>
            <div className="client-info">
              <p><strong>Registration No:</strong> 2233</p>
              <p><strong>Address:</strong> No. 23 Jalan Firma 2/1, Kawasan Perindustrian Tebrau 1, Johor Bahru, 81100, Malaysia</p>
              <p><strong>PIC Name:</strong> Mr.Lee</p>
              <p><strong>PIC Contact:</strong> 0123456789</p>
            </div>
            <div className="client-date">2022-09-30</div>
          </div>
          <div className="add-person-icon" onClick={handlePersonClick}>
            <span className="person-plus-icon">👤+</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-section">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'tax' ? 'active' : ''}`}
            onClick={() => setActiveTab('tax')}
          >
            Tax
          </button>
          <button 
            className={`tab ${activeTab === 'audit' ? 'active' : ''}`}
            onClick={() => setActiveTab('audit')}
          >
            Audit
          </button>
          <button 
            className={`tab ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            Account
          </button>
          <button 
            className={`tab ${activeTab === 'secretary' ? 'active' : ''}`}
            onClick={() => setActiveTab('secretary')}
          >
            Secretary
          </button>
        </div>
      </div>

      {/* Engagement Tasks */}
      <div className="engagement-section">
        <div className="engagement-header">
          <h3 className="engagement-title">Engagement Tasks</h3>
          <div className="engagement-buttons">
            <button className="send-reminder-btn">
              🔔 Send Reminder
            </button>
            <button className="add-engagement-btn" onClick={handleAddEngagement}>
              ➕ Add New Engagement
            </button>
          </div>
        </div>

        <div className="engagement-table-container">
          <table className="engagement-table">
            <thead>
              <tr>
                <th>Engagement Task</th>
                <th>Files</th>
                <th>Status</th>
                <th>Upload By</th>
                <th>Approved By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {engagements.map((engagement) => (
                <tr key={engagement.id}>
                  <td className="task-cell">
                    <div className="task-name">{engagement.task}</div>
                    <div className="task-description">{engagement.description}</div>
                  </td>
                  <td className="files-cell">
                    <button className="file-field-btn">{engagement.files}</button>
                  </td>
                  <td className="status-cell">
                    <select 
                      className="status-select"
                      value={engagement.status}
                      onChange={(e) => handleStatusChange(engagement.id, e.target.value)}
                    >
                      <option value="Status">Status</option>
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Approved">Approved</option>
                    </select>
                  </td>
                  <td className="upload-cell">
                    <input 
                      type="text"
                      className="upload-input"
                      value={engagement.uploadBy}
                      onChange={(e) => handleUploadByChange(engagement.id, e.target.value)}
                    />
                  </td>
                  <td className="approved-cell">
                    <input 
                      type="text"
                      className="approved-input"
                      value={engagement.approvedBy}
                      onChange={(e) => handleApprovedByChange(engagement.id, e.target.value)}
                    />
                  </td>
                  <td className="actions-cell">
                    <div className="action-icons">
                      <button className="action-btn approve-btn" title="Approve">✓</button>
                      <button className="action-btn comment-btn" title="Comment">💬</button>
                      <button 
                        className="action-btn delete-btn" 
                        title="Delete"
                        onClick={() => handleDeleteEngagement(engagement.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slide Page */}
      {showSlidePage && (
        <div className="slide-page-overlay" onClick={handleCloseSlidePage}>
          <div className="slide-page-content" onClick={(e) => e.stopPropagation()}>
            <div className="slide-page-header">
              <h2 className="slide-page-title">Zuss Coffee Sdn. Bhd.</h2>
              <button className="slide-page-close" onClick={handleCloseSlidePage}>×</button>
            </div>
            
            <div className="slide-page-tabs">
              <button 
                className={`slide-page-tab ${slidePageTab === 'company-info' ? 'active' : ''}`}
                onClick={() => setSlidePageTab('company-info')}
              >
                Company Information
              </button>
              <button 
                className={`slide-page-tab ${slidePageTab === 'client-user' ? 'active' : ''}`}
                onClick={() => setSlidePageTab('client-user')}
              >
                Client User
              </button>
            </div>

            <div className="slide-page-body">
              {slidePageTab === 'company-info' ? (
                <div className="company-info-form">
                  {/* Corporate Info Section */}
                  <div className="form-section">
                    <div className="section-header">
                      <span className="section-icon">🏢</span>
                      <h3 className="section-title">CORPORATE INFO</h3>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Company Name *</label>
                        <input type="text" className="form-input" defaultValue="MUBY Sdn. Bhd." />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Registration No. *</label>
                        <input type="text" className="form-input" defaultValue="1086846-W" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Former Name</label>
                        <input type="text" className="form-input" defaultValue="DEF sdn. bhd" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Former Reg. No.</label>
                        <input type="text" className="form-input" defaultValue="BA100000" />
                      </div>
                    </div>
                  </div>

                  {/* Address Info Section */}
                  <div className="form-section">
                    <div className="section-header">
                      <span className="section-icon">🏠</span>
                      <h3 className="section-title">ADDRESS INFO</h3>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Address Line 1 *</label>
                        <input type="text" className="form-input" defaultValue="123 Dummy St" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Address Line 2</label>
                        <input type="text" className="form-input" defaultValue="Apt 4B" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Zip *</label>
                        <input type="text" className="form-input" defaultValue="12345" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">State *</label>
                        <input type="text" className="form-input" defaultValue="Dummyprovince" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">City *</label>
                        <input type="text" className="form-input" defaultValue="Dummytown" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Country *</label>
                        <select className="form-select" defaultValue="Malaysia">
                          <option value="Malaysia">Malaysia</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Thailand">Thailand</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Section */}
                  <div className="form-section">
                    <div className="section-header">
                      <span className="section-icon">📞</span>
                      <h3 className="section-title">CONTACT INFO</h3>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Contact Person</label>
                        <input type="text" className="form-input" defaultValue="ABC sdn.bhd" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input type="email" className="form-input" defaultValue="contact@muby.com" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone *</label>
                        <input type="tel" className="form-input" defaultValue="+60 3-1234 5678" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Website</label>
                        <input type="url" className="form-input" defaultValue="www.muby.com" />
                      </div>
                    </div>
                  </div>

                  {/* Company Settings Section */}
                  <div className="form-section">
                    <div className="section-header">
                      <span className="section-icon">⚙️</span>
                      <h3 className="section-title">COMPANY SETTINGS</h3>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Company Logo</label>
                        <div className="file-upload-container">
                          <button type="button" className="file-upload-btn">
                            <span className="folder-icon">📁</span>
                            Choose Logo
                          </button>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Country (Timezone) *</label>
                        <select className="form-select" defaultValue="Malaysia (GMT+8)">
                          <option value="Malaysia (GMT+8)">Malaysia (GMT+8)</option>
                          <option value="Singapore (GMT+8)">Singapore (GMT+8)</option>
                          <option value="Thailand (GMT+7)">Thailand (GMT+7)</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Language *</label>
                        <select className="form-select" defaultValue="English">
                          <option value="English">English</option>
                          <option value="Malay">Malay</option>
                          <option value="Chinese">Chinese</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Currency *</label>
                        <select className="form-select" defaultValue="Malaysian Ringgit (MYR)">
                          <option value="Malaysian Ringgit (MYR)">Malaysian Ringgit (MYR)</option>
                          <option value="Singapore Dollar (SGD)">Singapore Dollar (SGD)</option>
                          <option value="US Dollar (USD)">US Dollar (USD)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="form-actions">
                    <button type="button" className="cancel-btn">Cancel</button>
                    <button type="button" className="save-btn">Save Changes</button>
                  </div>
                </div>
              ) : (
                <div className="client-user-content">
                  <div className="client-user-header">
                    <h3 className="client-user-title">Client Users</h3>
                    <button className="add-user-btn" onClick={handleAddClientUser}>
                      ➕ Add User
                    </button>
                  </div>
                  
                  <div className="client-user-table-container">
                    <table className="client-user-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Contact method</th>
                          <th>Departments</th>
                          <th>Reminder</th>
                          <th>2FA</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {clientUsers.map((user) => (
                          <tr key={user.id}>
                            <td className="user-name-cell">
                              <input
                                type="text"
                                className="user-name-input"
                                value={user.name}
                                onChange={(e) => handleUserChange(user.id, 'name', e.target.value)}
                              />
                            </td>
                            <td className="user-contact-cell">
                              <div className="contact-info">
                                <input
                                  type="email"
                                  className="contact-input"
                                  value={user.email}
                                  onChange={(e) => handleUserChange(user.id, 'email', e.target.value)}
                                />
                                <input
                                  type="tel"
                                  className="contact-input"
                                  value={user.phone}
                                  onChange={(e) => handleUserChange(user.id, 'phone', e.target.value)}
                                />
                              </div>
                            </td>
                            <td className="user-department-cell">
                              <select
                                className="department-select"
                                value={user.department}
                                onChange={(e) => handleUserChange(user.id, 'department', e.target.value)}
                              >
                                <option value="Accounts">Accounts</option>
                                <option value="Audit">Audit</option>
                                <option value="Tax">Tax</option>
                                <option value="Secretary">Secretary</option>
                                <option value="Billing">Billing</option>
                                <option value="Archives">Archives</option>
                              </select>
                            </td>
                            <td className="user-reminder-cell">
                              <div className="reminder-options">
                                <label className="reminder-option">
                                  <input
                                    type="checkbox"
                                    checked={user.emailReminder}
                                    onChange={(e) => handleUserChange(user.id, 'emailReminder', e.target.checked)}
                                  />
                                  <span>Email [Y/N]</span>
                                </label>
                                <label className="reminder-option">
                                  <input
                                    type="checkbox"
                                    checked={user.whatsappReminder}
                                    onChange={(e) => handleUserChange(user.id, 'whatsappReminder', e.target.checked)}
                                  />
                                  <span>Whatsapp [Y/N]</span>
                                </label>
                              </div>
                            </td>
                            <td className="user-2fa-cell">
                              <button
                                className={`twofa-toggle ${user.twoFA ? 'enabled' : 'disabled'}`}
                                onClick={() => handleUserChange(user.id, 'twoFA', !user.twoFA)}
                              >
                                {user.twoFA ? 'Disable' : 'Enable'}
                              </button>
                            </td>
                            <td className="user-actions-cell">
                              <div className="user-action-buttons">
                                <button
                                  className="edit-user-btn"
                                  onClick={() => handleEditClientUser(user.id)}
                                >
                                  [Edit]
                                </button>
                                <button
                                  className="delete-user-btn"
                                  onClick={() => handleDeleteClientUser(user.id)}
                                >
                                  [Delete]
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default CompanyDetails;