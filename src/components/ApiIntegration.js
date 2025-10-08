import React, { useState } from 'react';
import './ApiIntegration.css';

const ApiIntegration = () => {
  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: 'Google Drive',
      description: 'Connect and manage Google Drive file permissions for seamless document access.',
      enabled: false,
      icon: '📁',
      apiKey: '',
      expanded: false
    },
    {
      id: 2,
      name: 'WhatsApp',
      description: 'Integrate WhatsApp for notifications and communication with your team.',
      enabled: false,
      icon: '💬',
      apiKey: '',
      expanded: false
    },
    {
      id: 3,
      name: 'Email',
      description: 'Configure email integration for automated notifications and document sharing.',
      enabled: false,
      icon: '📧',
      apiKey: '',
      expanded: false
    }
  ]);

  const handleToggle = (id) => {
    setIntegrations(prevIntegrations =>
      prevIntegrations.map(integration =>
        integration.id === id
          ? { 
              ...integration, 
              enabled: !integration.enabled,
              expanded: !integration.enabled // Expand when enabling, collapse when disabling
            }
          : integration
      )
    );
  };

  const handleApiKeyChange = (id, apiKey) => {
    setIntegrations(prevIntegrations =>
      prevIntegrations.map(integration =>
        integration.id === id
          ? { ...integration, apiKey }
          : integration
      )
    );
  };

  const handleSaveApiKey = (id) => {
    const integration = integrations.find(integration => integration.id === id);
    if (integration && integration.apiKey.trim()) {
      alert(`API key saved for ${integration.name}!`);
      // Here you would typically save to backend
    } else {
      alert('Please enter a valid API key');
    }
  };

  return (
    <div className="api-integration-page">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">API Integration</h1>
        <p className="page-subtitle">Grant or restrict access to files and tools.</p>
      </div>

      {/* Integration List */}
      <div className="integration-section">
        <div className="integration-list">
          {integrations.map((integration) => (
            <div key={integration.id} className="integration-item">
              <div className="integration-main">
                <div className="integration-content">
                  <div className="integration-icon">
                    {integration.icon}
                  </div>
                  <div className="integration-details">
                    <h3 className="integration-title">{integration.name} Access Granted</h3>
                    <p className="integration-description">{integration.description}</p>
                  </div>
                </div>
                <div className="integration-toggle">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={integration.enabled}
                      onChange={() => handleToggle(integration.id)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              
              {/* Expandable API Key Section */}
              {integration.expanded && (
                <div className="api-key-section">
                  <div className="api-key-content">
                    <div className="api-key-header">
                      <h4 className="api-key-title">Enter API Key</h4>
                      <p className="api-key-description">
                        Please enter your {integration.name} API key to complete the integration.
                      </p>
                    </div>
                    <div className="api-key-input-group">
                      <input
                        type="password"
                        className="api-key-input"
                        placeholder={`Enter your ${integration.name} API key...`}
                        value={integration.apiKey}
                        onChange={(e) => handleApiKeyChange(integration.id, e.target.value)}
                      />
                      <button
                        className="save-api-key-btn"
                        onClick={() => handleSaveApiKey(integration.id)}
                      >
                        Save API Key
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiIntegration;
