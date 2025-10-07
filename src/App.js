import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import WelcomeBanner from './components/WelcomeBanner';
import CreditCard from './components/CreditCard';
import CompanyTable from './components/CompanyTable';
import CompanyInfo from './components/CompanyInfo';
import UserSettings from './components/UserSettings';
import TemplatesReminders from './components/TemplatesReminders';
import UsageLogs from './components/UsageLogs';
import BillingInvoice from './components/BillingInvoice';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderMainContent = () => {
    switch (currentPage) {
      case 'company-info':
        return <CompanyInfo />;
      case 'user-settings':
        return <UserSettings />;
      case 'templates':
        return <TemplatesReminders />;
      case 'usage-logs':
        return <UsageLogs />;
      case 'billing-invoice':
        return <BillingInvoice />;
      case 'dashboard':
      default:
        return (
          <>
            <div className="top-section">
              <WelcomeBanner />
              <CreditCard />
            </div>
            <CompanyTable />
          </>
        );
    }
  };

  return (
    <div className="dashboard">
      <Sidebar onNavigate={handleNavigation} currentPage={currentPage} />
      
      <div className={`main-content ${currentPage === 'company-info' || currentPage === 'user-settings' || currentPage === 'templates' || currentPage === 'usage-logs' || currentPage === 'billing-invoice' ? 'full-width' : ''}`}>
        {renderMainContent()}
      </div>
    </div>
  );
}

export default App;
