import React, { useState } from 'react';
import './BillingInvoice.css';

const BillingInvoice = () => {
  const [activeTab, setActiveTab] = useState('credit-topup');
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState(1000);
  const [promoCode, setPromoCode] = useState('');
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const creditAmounts = [1000, 5000, 10000];
  const invoices = [
    { id: 1, period: 'September 2025', status: 'Paid', description: 'Infrastructure usage & docuPlus platform', totalDue: '$20.00', invoicedDate: 'Sep 5, 2025' },
    { id: 2, period: 'August 2025', status: 'Paid', description: 'Infrastructure usage & docuPlus platform', totalDue: '$20.00', invoicedDate: 'Aug 5, 2025' },
    { id: 3, period: 'July 2025', status: 'Paid', description: 'Infrastructure usage & docuPlus platform', totalDue: '$20.00', invoicedDate: 'Jul 5, 2025' },
    { id: 4, period: 'June 2025', status: 'Paid', description: 'Infrastructure usage & docuPlus platform', totalDue: '$20.00', invoicedDate: 'Jun 5, 2025' },
    { id: 5, period: 'May 2025', status: 'Paid', description: 'Infrastructure usage & docuPlus platform', totalDue: '$20.00', invoicedDate: 'May 5, 2025' },
    { id: 6, period: 'April 2025', status: 'Paid', description: 'Infrastructure usage & docuPlus platform', totalDue: '$20.00', invoicedDate: 'Apr 5, 2025' },
    { id: 7, period: 'March 2025', status: 'Paid', description: 'Infrastructure usage & docuPlus platform', totalDue: '$20.00', invoicedDate: 'Mar 5, 2025' },
    { id: 8, period: 'February 2025', status: 'Paid', description: 'Infrastructure usage & docuPlus platform', totalDue: '$20.00', invoicedDate: 'Feb 5, 2025' }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount);
  };

  const handleCustomAmountChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setCustomAmount(value);
    setSelectedAmount(value);
  };

  const handleIncrement = () => {
    const newAmount = customAmount + 100;
    setCustomAmount(newAmount);
    setSelectedAmount(newAmount);
  };

  const handleDecrement = () => {
    const newAmount = Math.max(0, customAmount - 100);
    setCustomAmount(newAmount);
    setSelectedAmount(newAmount);
  };

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
    setShowInvoiceModal(true);
  };

  const renderCreditTopup = () => (
    <div className="credit-topup-content">
      <div className="credit-selection">
        <div className="credit-tabs">
          {creditAmounts.map((amount) => (
            <button
              key={amount}
              className={`credit-tab ${selectedAmount === amount ? 'active' : ''}`}
              onClick={() => handleAmountSelect(amount)}
            >
              {amount.toLocaleString()} credits
            </button>
          ))}
        </div>
      </div>

      <div className="custom-amount-section">
        <label className="section-label">CUSTOM AMOUNT</label>
        <div className="amount-input-group">
          <button className="amount-btn" onClick={handleDecrement}>-</button>
          <input
            type="number"
            className="amount-input"
            value={customAmount}
            onChange={handleCustomAmountChange}
          />
          <button className="amount-btn" onClick={handleIncrement}>+</button>
        </div>
        <div className="exchange-rate">
          <span className="info-icon">ℹ</span>
          <span className="rate-text">RM 1 = 1 Credit</span>
        </div>
      </div>

      <div className="promo-section">
        <label className="section-label">PROMO CODE</label>
        <div className="promo-input-group">
          <input
            type="text"
            className="promo-input"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button className="apply-btn">Apply</button>
        </div>
        <div className="promotions-link">
          <div className="gift-icon">
            <div className="gift-box"></div>
            <div className="ribbon-vertical"></div>
            <div className="ribbon-horizontal"></div>
          </div>
          <span className="link-text">Available Promotions</span>
          <span className="click-text">Click to apply</span>
        </div>
        <div className="loading-promotions">
          <div className="spinner"></div>
          <span>Loading promotions...</span>
        </div>
      </div>

      <div className="order-summary">
        <div className="order-item">
          <span className="document-icon">📄</span>
          <span>You're buying {selectedAmount.toLocaleString()} credits</span>
        </div>
        <div className="summary-row">
          <span>Base Amount:</span>
          <span>RM {selectedAmount.toLocaleString()}.00</span>
        </div>
        <div className="summary-row total">
          <span className="camera-icon">📷</span>
          <span>Total to Pay:</span>
          <span>RM {selectedAmount.toLocaleString()}.00</span>
        </div>
      </div>

      <div className="action-buttons">
        <button className="cancel-btn">
          <span className="cancel-icon">✕</span>
          Cancel
        </button>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );

  const renderInvoices = () => (
    <div className="invoices-content">
      <div className="invoices-list">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="invoice-item" onClick={() => handleInvoiceClick(invoice)}>
            <div className="invoice-info">
              <div className="invoice-period">
                <span className="period-text">{invoice.period}</span>
                <span className="status-badge paid">{invoice.status}</span>
              </div>
              <div className="invoice-description">{invoice.description}</div>
            </div>
            <div className="invoice-amount">
              <div className="amount-label">Total Due</div>
              <div className="amount-value">{invoice.totalDue}</div>
            </div>
            <div className="invoice-date">
              <div className="date-text">Invoiced {invoice.invoicedDate}</div>
              <button className="options-btn">⋯</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="billing-invoice-page">
      <div className="page-header">
        <div className="page-title">Billing & Invoice</div>
      </div>

      <div className="page-content">
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'credit-topup' ? 'active' : ''}`}
            onClick={() => setActiveTab('credit-topup')}
          >
            Credit Topup
          </button>
          <button
            className={`tab-button ${activeTab === 'invoices' ? 'active' : ''}`}
            onClick={() => setActiveTab('invoices')}
          >
            Invoices
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'credit-topup' ? renderCreditTopup() : renderInvoices()}
        </div>
      </div>

      {showInvoiceModal && selectedInvoice && (
        <div className="modal-overlay" onClick={() => setShowInvoiceModal(false)}>
          <div className="invoice-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Invoice Details</h3>
              <button className="close-btn" onClick={() => setShowInvoiceModal(false)}>×</button>
            </div>
            <div className="modal-content">
              <div className="invoice-detail">
                <div className="detail-row">
                  <span className="detail-label">Period:</span>
                  <span className="detail-value">{selectedInvoice.period}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value status-paid">{selectedInvoice.status}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Description:</span>
                  <span className="detail-value">{selectedInvoice.description}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Total Due:</span>
                  <span className="detail-value amount">{selectedInvoice.totalDue}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Invoiced Date:</span>
                  <span className="detail-value">{selectedInvoice.invoicedDate}</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="download-btn">Download PDF</button>
              <button className="close-modal-btn" onClick={() => setShowInvoiceModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingInvoice;
