import React from 'react';
import './CompanyInfo.css';

const CompanyInfo = () => {
  return (
    <div className="company-info-page">
      {/* Header */}
      <div className="page-header">
        
        <h1 className="page-title">COMPANY INFO</h1>
      </div>

      {/* Main Content - Complex Multi-Column Layout */}
      <div className="form-container">
        <div className="main-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* CORPORATE INFO Section */}
            <div className="form-section compact">
              <div className="section-header">
                <div className="section-icon">🏢</div>
                <h2 className="section-title">CORPORATE INFO</h2>
              </div>
              <div className="form-grid compact">
                <div className="form-group">
                  <label className="form-label required">Company Name</label>
                  <input type="text" className="form-input" defaultValue="MUBY Sdn. Bhd." />
                </div>
                <div className="form-group">
                  <label className="form-label required">Registration No.</label>
                  <input type="text" className="form-input" defaultValue="1086846-W" />
                </div>
                <div className="form-group">
                  <label className="form-label">Former Name</label>
                  <input type="text" className="form-input disabled" defaultValue="DEF sdn.bhd" />
                </div>
                <div className="form-group">
                  <label className="form-label">Former Reg. No.</label>
                  <input type="text" className="form-input disabled" defaultValue="BA100000" />
                </div>
              </div>
            </div>

            {/* CONTACT INFO Section */}
            <div className="form-section compact">
              <div className="section-header">
                <div className="section-icon">📞</div>
                <h2 className="section-title">CONTACT INFO</h2>
              </div>
              <div className="form-grid compact">
                <div className="form-group">
                  <label className="form-label">Contact Person</label>
                  <input type="text" className="form-input" defaultValue="ABC sdn.bhd" />
                </div>
                <div className="form-group">
                  <label className="form-label required">Email</label>
                  <input type="email" className="form-input" defaultValue="contact@muby.com" />
                </div>
                <div className="form-group">
                  <label className="form-label required">Phone</label>
                  <input type="tel" className="form-input" defaultValue="+60 3-1234 5678" />
                </div>
                <div className="form-group">
                  <label className="form-label">Website</label>
                  <input type="url" className="form-input" defaultValue="www.muby.com" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* ADDRESS INFO Section */}
            <div className="form-section compact">
              <div className="section-header">
                <div className="section-icon">🏠</div>
                <h2 className="section-title">ADDRESS INFO</h2>
              </div>
              <div className="form-grid compact">
                <div className="form-group full-width">
                  <label className="form-label required">Address Line 1</label>
                  <input type="text" className="form-input" defaultValue="123 Dummy St" />
                </div>
                <div className="form-group full-width">
                  <label className="form-label">Address Line 2</label>
                  <input type="text" className="form-input" defaultValue="Apt 4B" />
                </div>
                <div className="form-group">
                  <label className="form-label required">Zip</label>
                  <input type="text" className="form-input" defaultValue="12345" />
                </div>
                <div className="form-group">
                  <label className="form-label required">State</label>
                  <input type="text" className="form-input" defaultValue="Dummyprovince" />
                </div>
                <div className="form-group">
                  <label className="form-label required">City</label>
                  <input type="text" className="form-input" defaultValue="Dummytown" />
                </div>
                <div className="form-group">
                  <label className="form-label required">Country</label>
                  <select className="form-input">
                    <option value="malaysia">Malaysia</option>
                    <option value="singapore">Singapore</option>
                    <option value="thailand">Thailand</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="philippines">Philippines</option>
                  </select>
                </div>
              </div>
            </div>

            {/* COMPANY SETTINGS Section */}
            <div className="form-section compact">
              <div className="section-header">
                <div className="section-icon">⚙️</div>
                <h2 className="section-title">COMPANY SETTINGS</h2>
              </div>
              <div className="form-grid compact">
                <div className="form-group">
                  <label className="form-label">Company Logo</label>
                  <div className="file-upload-container compact">
                    <input type="file" className="file-input" accept="image/*" />
                    <div className="file-upload-display">
                      <div className="upload-icon">📁</div>
                      <span className="upload-text">Choose Logo</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label required">Country (Timezone)</label>
                  <select className="form-input">
                    <option value="malaysia">Malaysia (GMT+8)</option>
                    <option value="singapore">Singapore (GMT+8)</option>
                    <option value="thailand">Thailand (GMT+7)</option>
                    <option value="indonesia">Indonesia (GMT+7)</option>
                    <option value="philippines">Philippines (GMT+8)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label required">Language</label>
                  <select className="form-input">
                    <option value="english">English</option>
                    <option value="malay">Bahasa Malaysia</option>
                    <option value="chinese">Chinese</option>
                    <option value="tamil">Tamil</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label required">Currency</label>
                  <select className="form-input">
                    <option value="myr">Malaysian Ringgit (MYR)</option>
                    <option value="sgd">Singapore Dollar (SGD)</option>
                    <option value="thb">Thai Baht (THB)</option>
                    <option value="idr">Indonesian Rupiah (IDR)</option>
                    <option value="php">Philippine Peso (PHP)</option>
                    <option value="usd">US Dollar (USD)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
