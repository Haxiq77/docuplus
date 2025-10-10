import React, { useState } from 'react';
import './BillingInvoice.css';

const BillingInvoice = () => {
  const [transactions] = useState([
    {
      id: 1,
      date: '12/05/2025',
      nature: 'Top up',
      movementCredit: '+100',
      movementFreeCo: '-',
      actionBy: 'Jeff',
      closingBalanceCredit: 109,
      closingBalanceFreeCo: 20,
      exportType: 'Invoice'
    },
    {
      id: 2,
      date: '12/05/2025',
      nature: 'Referral rewards',
      movementCredit: '-',
      movementFreeCo: '+20',
      actionBy: 'System',
      closingBalanceCredit: 9,
      closingBalanceFreeCo: 20,
      exportType: 'Statement'
    },
    {
      id: 3,
      date: '12/05/2025',
      nature: 'Usage',
      movementCredit: '-1',
      movementFreeCo: '-',
      actionBy: 'Haziq',
      closingBalanceCredit: 9,
      closingBalanceFreeCo: '-',
      exportType: 'Report'
    }
  ]);

  const handleExport = (exportType, transactionId) => {
    console.log(`Exporting ${exportType} for transaction ${transactionId}`);
    // Here you would implement the actual export functionality
  };

  return (
    <div className="billing-invoice-page">
      <div className="page-header">
        <div className="page-title">Billing & Invoice</div>
      </div>
      
      <div className="page-content">
        <div className="transactions-table-container">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Nature</th>
                <th colSpan="2" className="group-header">Movement</th>
                <th>Action by</th>
                <th colSpan="2" className="group-header">Closing balance</th>
                <th>Export</th>
              </tr>
              <tr className="sub-header">
                <th></th>
                <th></th>
                <th>Credit</th>
                <th>Free Co</th>
                <th></th>
                <th>Credit</th>
                <th>Free Co</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="date-cell">{transaction.date}</td>
                  <td className="nature-cell">{transaction.nature}</td>
                  <td className="movement-credit-cell">
                    <span className={`movement-value ${transaction.movementCredit.startsWith('+') ? 'positive' : transaction.movementCredit.startsWith('-') ? 'negative' : 'neutral'}`}>
                      {transaction.movementCredit}
                    </span>
                  </td>
                  <td className="movement-freeco-cell">
                    <span className={`movement-value ${transaction.movementFreeCo.startsWith('+') ? 'positive' : transaction.movementFreeCo.startsWith('-') ? 'negative' : 'neutral'}`}>
                      {transaction.movementFreeCo}
                    </span>
                  </td>
                  <td className="action-by-cell">{transaction.actionBy}</td>
                  <td className="closing-credit-cell">{transaction.closingBalanceCredit}</td>
                  <td className="closing-freeco-cell">{transaction.closingBalanceFreeCo}</td>
                  <td className="export-cell">
                    <button 
                      className="export-btn"
                      onClick={() => handleExport(transaction.exportType, transaction.id)}
                    >
                      [{transaction.exportType}]
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

export default BillingInvoice;
