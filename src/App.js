import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/homepage/Sidebar';
import WelcomeBanner from './components/homepage/WelcomeBanner';
import CreditCard from './components/homepage/CreditCard';
import CompanyTable from './components/homepage/CompanyTable';
import CompanyInfo from './components/CompanyInfo';
import UserSettings from './components/UserSettings';
import TemplatesReminders from './components/TemplatesReminders';
import UsageLogs from './components/UsageLogs';
import ApiIntegration from './components/ApiIntegration';
import BillingInvoice from './components/BillingInvoice';
import LogoutPage from './components/LogoutPage';
import CompanyDetails from './components/homepage/companylevelsetting/CompanyDetails';

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
      case 'api-integration':
        return <ApiIntegration />;
      case 'billing-invoice':
        return <BillingInvoice />;
      case 'logout':
        return <LogoutPage />;
      case 'company-details':
        return <CompanyDetails onNavigate={handleNavigation} />;
      case 'dashboard':
      default:
        return (
          <>
            <div className="top-section">
              <WelcomeBanner />
              <CreditCard />
            </div>
            <CompanyTable onNavigate={handleNavigation} />
          </>
        );
    }
  };

  // If logout page, show only the logout page without sidebar
  if (currentPage === 'logout') {
    return <LogoutPage />;
  }

  return (
    <div className="dashboard">
      <Sidebar onNavigate={handleNavigation} currentPage={currentPage} />
      
      {currentPage === 'company-details' ? (
        renderMainContent()
      ) : (
        <div className={`main-content ${currentPage === 'company-info' || currentPage === 'user-settings' || currentPage === 'templates' || currentPage === 'usage-logs' || currentPage === 'api-integration' || currentPage === 'billing-invoice' ? 'full-width' : ''}`}>
          {renderMainContent()}
        </div>
      )}
    </div>
  );
}

export default App;
