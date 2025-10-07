import React, { useState } from 'react';
import './TemplatesReminders.css';

const TemplatesReminders = () => {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      type: 'Provided by client',
      title: 'Bank statement',
      description: 'Bank statement detailed in PDF by months',
      frequency: 'weekly',
      customReminder: '',
      email: false,
      whatsapp: false
    },
    {
      id: 2,
      type: 'Provided to client',
      title: 'Expenses',
      description: 'All receipts segregated by months',
      frequency: 'monthly',
      customReminder: '',
      email: false,
      whatsapp: false
    }
  ]);


  const typeOptions = [
    'Provided by client',
    'Provided to client',
    'Internal process',
    'External requirement',
    'Compliance check',
    'Other'
  ];

  const titleOptions = [
    'Bank statement',
    'Expenses',
    'Audit',
    'Tax filing',
    'Secretary',
    'Accounting',
    'Financial report',
    'Compliance check'
  ];

  const frequencyOptions = [
    'daily',
    'weekly',
    'forthnightly',
    'monthly',
    'quarterly',
    'yearly'
  ];

  const handleTypeChange = (id, newType) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id ? { ...reminder, type: newType } : reminder
      )
    );
  };

  const handleTitleChange = (id, newTitle) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id ? { ...reminder, title: newTitle } : reminder
      )
    );
  };

  const handleDescriptionChange = (id, newDescription) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id ? { ...reminder, description: newDescription } : reminder
      )
    );
  };

  const handleFrequencyChange = (id, newFrequency) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id ? { ...reminder, frequency: newFrequency } : reminder
      )
    );
  };

  const handleCustomReminderChange = (id, newCustomReminder) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id ? { ...reminder, customReminder: newCustomReminder } : reminder
      )
    );
  };

  const handleEmailToggle = (id) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id ? { ...reminder, email: !reminder.email } : reminder
      )
    );
  };

  const handleWhatsappToggle = (id) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id ? { ...reminder, whatsapp: !reminder.whatsapp } : reminder
      )
    );
  };


  const addNewReminder = () => {
    const newReminder = {
      id: reminders.length + 1,
      type: 'Provided by client',
      title: 'Bank statement',
      description: '',
      frequency: 'weekly',
      customReminder: '',
      email: false,
      whatsapp: false
    };
    setReminders([...reminders, newReminder]);
  };

  const removeReminder = (id) => {
    setReminders(prev => prev.filter(reminder => reminder.id !== id));
  };

  return (
    <div className="templates-reminders-page">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Templates & Reminders</h1>
        <p className="page-subtitle">(Audit / tax / secretary / accounting)</p>
      </div>



      {/* Table Section */}
      <div className="table-section">
        <div className="table-header">
          <h2 className="table-title">Reminder Settings</h2>
          <button className="add-reminder-btn" onClick={addNewReminder}>
            + Add Reminder
          </button>
        </div>

        <div className="table-container">
          <table className="reminders-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Title</th>
                <th>Description</th>
                <th>Reminder frequency</th>
                <th>Custom reminder</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reminders.map((reminder) => (
                <tr key={reminder.id}>
                  <td className="type-cell">
                    <select 
                      value={reminder.type}
                      onChange={(e) => handleTypeChange(reminder.id, e.target.value)}
                      className="type-select"
                    >
                      {typeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                  <td className="title-cell">
                    <select 
                      value={reminder.title}
                      onChange={(e) => handleTitleChange(reminder.id, e.target.value)}
                      className="title-select"
                    >
                      {titleOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                  <td className="description-cell">
                    <input 
                      type="text"
                      value={reminder.description}
                      onChange={(e) => handleDescriptionChange(reminder.id, e.target.value)}
                      className="description-input"
                      placeholder="Enter description..."
                    />
                  </td>
                  <td className="frequency-cell">
                    <div className="frequency-content">
                      <select 
                        value={reminder.frequency}
                        onChange={(e) => handleFrequencyChange(reminder.id, e.target.value)}
                        className="frequency-select"
                      >
                        {frequencyOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <div className="reminder-methods">
                        <div className="method-toggle">
                          <span className="method-label">Email</span>
                          <label className="toggle-switch-green">
                            <input 
                              type="checkbox" 
                              checked={reminder.email}
                              onChange={() => handleEmailToggle(reminder.id)}
                            />
                            <span className="toggle-slider-green"></span>
                          </label>
                        </div>
                        <div className="method-toggle">
                          <span className="method-label">WhatsApp</span>
                          <label className="toggle-switch-green">
                            <input 
                              type="checkbox" 
                              checked={reminder.whatsapp}
                              onChange={() => handleWhatsappToggle(reminder.id)}
                            />
                            <span className="toggle-slider-green"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="custom-reminder-cell">
                    <input 
                      type="text"
                      value={reminder.customReminder}
                      onChange={(e) => handleCustomReminderChange(reminder.id, e.target.value)}
                      className="custom-reminder-input"
                      placeholder="Enter custom reminder..."
                    />
                  </td>
                  <td className="actions-cell">
                    <button 
                      className="delete-btn"
                      onClick={() => removeReminder(reminder.id)}
                      title="Delete reminder"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TemplatesReminders;
