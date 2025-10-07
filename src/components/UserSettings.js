import React, { useState } from 'react';
import './UserSettings.css';

const UserSettings = () => {
  const [activeTab, setActiveTab] = useState('user-management');
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: 'KL group',
      description: 'Group for KL'
    },
    {
      id: 2,
      name: 'JB group',
      description: 'Group for JB'
    }
  ]);
  const [permissions, setPermissions] = useState([
    {
      id: 1,
      category: 'Engagement Management',
      administrator: ['Create'],
      manager: ['Create'],
      senior: ['Create'],
      junior: ['Create'],
      clientUser: ['Create'],
      availableOptions: ['Create', 'Edit', 'Delete']
    },
    {
      id: 2,
      category: 'Engagement Workspace',
      administrator: ['Contribute'],
      manager: ['Create'],
      senior: ['Create'],
      junior: ['Create'],
      clientUser: ['Create'],
      availableOptions: ['Create', 'Contribute', 'Lock', 'Delete']
    },
    {
      id: 3,
      category: 'Admin settings',
      administrator: ['View'],
      manager: ['View'],
      senior: ['View'],
      junior: ['View'],
      clientUser: ['View'],
      availableOptions: ['View', 'Create', 'Edit', 'Delete']
    },
    {
      id: 4,
      category: 'Audit Log',
      administrator: ['View'],
      manager: ['View'],
      senior: ['View'],
      junior: ['View'],
      clientUser: ['View'],
      availableOptions: ['View', 'Delete']
    }
  ]);

  const handlePermissionChange = (permissionId, role, option, isChecked) => {
    setPermissions(prevPermissions => 
      prevPermissions.map(permission => 
        permission.id === permissionId 
          ? {
              ...permission,
              [role]: isChecked 
                ? [...permission[role], option]
                : permission[role].filter(item => item !== option)
            }
          : permission
      )
    );
  };

  const handleAddGroup = () => {
    const newGroup = {
      id: groups.length + 1,
      name: 'New Group',
      description: 'Group description'
    };
    setGroups([...groups, newGroup]);
  };

  const handleEditGroup = (groupId) => {
    const newName = prompt('Enter new group name:', groups.find(g => g.id === groupId)?.name || '');
    if (newName) {
      setGroups(groups.map(group => 
        group.id === groupId ? { ...group, name: newName } : group
      ));
    }
  };

  const handleDeleteGroup = (groupId) => {
    if (window.confirm('Are you sure you want to delete this group?')) {
      setGroups(groups.filter(group => group.id !== groupId));
    }
  };

  const users = [
    {
      id: 1,
      email: 'admin@example.com',
      permission: 'ADMINISTRATOR',
      group: 'group kl',
      departments: ['Accounts', 'Audit', 'Tax', 'Secretary', 'Billing'],
      permissionColor: 'blue'
    },
    {
      id: 2,
      email: 'partner@example.com',
      permission: 'AUDIT PARTNER',
      group: 'group penang',
      departments: ['Audit', 'Tax'],
      permissionColor: 'orange'
    },
    {
      id: 3,
      email: 'manager@example.com',
      permission: 'AUDIT MANAGER',
      group: 'group kepong',
      departments: ['Audit', 'Secretary'],
      permissionColor: 'yellow'
    },
    {
      id: 4,
      email: 'senior@example.com',
      permission: 'SENIOR AUDITOR',
      group: 'group kl',
      departments: ['Audit'],
      permissionColor: 'light-blue'
    },
    {
      id: 5,
      email: 'junior@example.com',
      permission: 'JUNIOR AUDITOR',
      group: 'group penang',
      departments: ['Audit', 'Tax', 'Billing'],
      permissionColor: 'light-green'
    },
    {
      id: 6,
      email: 'outsider@example.com',
      permission: 'CLIENT USER',
      group: 'group kepong',
      departments: ['Billing'],
      permissionColor: 'gray'
    },
    {
      id: 7,
      email: 'rosescats99@gmail.com',
      permission: '-',
      group: 'group kl',
      departments: [],
      permissionColor: 'none'
    }
  ];

  const handleGroupChange = (userId, newGroup) => {
    // Handle group change logic here
    console.log(`User ${userId} group changed to ${newGroup}`);
  };

  const [usersData, setUsersData] = useState(users);

  const handleDepartmentChange = (userId, department, isChecked) => {
    setUsersData(prevUsers => 
      prevUsers.map(user => 
        user.id === userId 
          ? {
              ...user,
              departments: isChecked 
                ? [...user.departments, department]
                : user.departments.filter(dept => dept !== department)
            }
          : user
      )
    );
  };

  const handleEdit = (userId) => {
    // Handle edit logic here
    console.log(`Edit user ${userId}`);
  };

  const handleDelete = (userId) => {
    // Handle delete logic here
    console.log(`Delete user ${userId}`);
  };


  const renderContent = () => {
    if (activeTab === 'permission-management') {
      return (
        <div className="permission-management-content">
          <h2 className="permission-title">Role and Permission Management</h2>
          
          {/* Permissions Table */}
          <div className="permissions-table-container">
            <table className="permissions-table">
              <thead>
                <tr>
                  <th className="permission-header">Permission</th>
                  <th className="role-header administrator">Administrator</th>
                  <th className="role-header manager">Manager</th>
                  <th className="role-header senior">Senior</th>
                  <th className="role-header junior">Junior</th>
                  <th className="role-header client-user">Client user</th>
                </tr>
              </thead>
              <tbody>
                {permissions.map((permission) => (
                  <tr key={permission.id}>
                    <td className="permission-cell">
                      <div className="permission-name">{permission.category}</div>
                    </td>
                    <td className="permission-cell">
                      <div className="permission-checkboxes">
                        {permission.availableOptions.map((option) => (
                          <label key={option} className="permission-checkbox-label">
                            <input
                              type="checkbox"
                              checked={permission.administrator.includes(option)}
                              onChange={(e) => handlePermissionChange(permission.id, 'administrator', option, e.target.checked)}
                            />
                            <span className="permission-checkbox-text">{option}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                    <td className="permission-cell">
                      <div className="permission-checkboxes">
                        {permission.availableOptions.map((option) => (
                          <label key={option} className="permission-checkbox-label">
                            <input
                              type="checkbox"
                              checked={permission.manager.includes(option)}
                              onChange={(e) => handlePermissionChange(permission.id, 'manager', option, e.target.checked)}
                            />
                            <span className="permission-checkbox-text">{option}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                    <td className="permission-cell">
                      <div className="permission-checkboxes">
                        {permission.availableOptions.map((option) => (
                          <label key={option} className="permission-checkbox-label">
                            <input
                              type="checkbox"
                              checked={permission.senior.includes(option)}
                              onChange={(e) => handlePermissionChange(permission.id, 'senior', option, e.target.checked)}
                            />
                            <span className="permission-checkbox-text">{option}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                    <td className="permission-cell">
                      <div className="permission-checkboxes">
                        {permission.availableOptions.map((option) => (
                          <label key={option} className="permission-checkbox-label">
                            <input
                              type="checkbox"
                              checked={permission.junior.includes(option)}
                              onChange={(e) => handlePermissionChange(permission.id, 'junior', option, e.target.checked)}
                            />
                            <span className="permission-checkbox-text">{option}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                    <td className="permission-cell">
                      <div className="permission-checkboxes">
                        {permission.availableOptions.map((option) => (
                          <label key={option} className="permission-checkbox-label">
                            <input
                              type="checkbox"
                              checked={permission.clientUser.includes(option)}
                              onChange={(e) => handlePermissionChange(permission.id, 'clientUser', option, e.target.checked)}
                            />
                            <span className="permission-checkbox-text">{option}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activeTab === 'groups') {
      return (
        <div className="groups-content">
          <div className="groups-header">
            <h2 className="groups-title">Group</h2>
            <button className="add-group-btn" onClick={handleAddGroup}>Add</button>
          </div>

          {/* Groups Table */}
          <div className="table-container">
            <table className="groups-table">
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => (
                  <tr key={group.id}>
                    <td>{group.name}</td>
                    <td>{group.description}</td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="edit-btn" 
                          onClick={() => handleEditGroup(group.id)}
                        >
                          Edit
                        </button>
                        <button 
                          className="delete-btn" 
                          onClick={() => handleDeleteGroup(group.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    // Default: User Management content
    return (
      <>
        {/* Group Profile Setting */}
        <div className="group-profile-section">
          <div className="group-profile-content">
            <div className="group-profile-left">
              <span className="group-profile-icon">📌</span>
              <span className="group-profile-text">Modify group profile for performing work</span>
            </div>
            <div className="group-profile-right">
              <span className="group-profile-gear">⚙️</span>
            </div>
          </div>
        </div>

        {/* Users Section */}
        <div className="users-section">
          <div className="users-header">
            <h2 className="users-title">Users</h2>
            <div className="users-controls">
              <select className="entries-select">
                <option value="10">10 entries per page</option>
                <option value="25">25 entries per page</option>
                <option value="50">50 entries per page</option>
              </select>
              <input type="text" className="search-input" placeholder="Search users..." />
              <button className="add-btn">Add</button>
            </div>
          </div>

          {/* Users Table */}
          <div className="table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>EMAIL</th>
                  <th>PERMISSION</th>
                  <th>GROUP</th>
                  <th>DEPARTMENTS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user) => (
                  <tr key={user.id}>
                    <td className="email">{user.email}</td>
                    <td className="permission">
                      {user.permission !== '-' && (
                        <span className={`permission-tag ${user.permissionColor}`}>
                          {user.permission}
                        </span>
                      )}
                      {user.permission === '-' && '-'}
                    </td>
                    <td className="group">
                      <select 
                        className="group-select"
                        value={user.group}
                        onChange={(e) => handleGroupChange(user.id, e.target.value)}
                      >
                        <option value="group kl">Group KL</option>
                        <option value="group penang">Group Penang</option>
                        <option value="group kepong">Group Kepong</option>
                      </select>
                    </td>
                    <td className="departments">
                      <div className="department-checkboxes">
                        {['Accounts', 'Audit', 'Tax', 'Secretary', 'Billing'].map((dept) => (
                          <label key={dept} className="department-checkbox">
                            <input
                              type="checkbox"
                              checked={user.departments.includes(dept)}
                              onChange={(e) => handleDepartmentChange(user.id, dept, e.target.checked)}
                            />
                            <span className="department-label">{dept}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                    <td className="actions">
                      <div className="action-buttons">
                        <button 
                          className="edit-btn"
                          onClick={() => handleEdit(user.id)}
                        >
                          Edit
                        </button>
                        <button 
                          className="delete-btn"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
      </>
    );
  };

  return (
    <div className="user-settings-page">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Settings / User & Accessibility Settings</h1>
      </div>

      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button 
          className={`tab-button ${activeTab === 'user-management' ? 'active' : ''}`}
          onClick={() => setActiveTab('user-management')}
        >
          User Management
        </button>
        <button 
          className={`tab-button ${activeTab === 'permission-management' ? 'active' : ''}`}
          onClick={() => setActiveTab('permission-management')}
        >
          Permission Management
        </button>
        <button 
          className={`tab-button ${activeTab === 'groups' ? 'active' : ''}`}
          onClick={() => setActiveTab('groups')}
        >
          Groups
        </button>
      </div>

      {/* Dynamic Content Based on Active Tab */}
      {renderContent()}
    </div>
  );
};

export default UserSettings;
