import React from 'react';
import './CreditCard.css';

const CreditCard = () => {
  return (
    <div className="credit-card">
      <h3 className="credit-title">Credit</h3>
      
      {/* <div className="referral-section">
        <label className="referral-label">REFERRAL CODE:</label>
        <div className="referral-input-group">
          <input type="text" className="referral-input" placeholder="" />
          <button className="copy-btn">📋</button>
        </div>
      </div>
       */}
      <div className="balance-section">
        <div className="balance-info">
          <span className="balance-label">Balance</span>
          <div className="balance-row">
            <span className="balance-amount">RM 200</span>
            <button className="free-engagement-btn">+20 Free Engagement</button>
          </div>
        </div>
      </div>
      
      <div className="credit-buttons">
        <button className="add-money-btn">+ Add money</button>
        <button className="history-btn">📊 Transaction History</button>
      </div>
    </div>
  );
};

export default CreditCard;
