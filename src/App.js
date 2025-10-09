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
import LoginPage from './components/LoginPage';
import CompanyDetails from './components/homepage/companylevelsetting/CompanyDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  const handleNavigateToLogin = () => {
    setCurrentPage('login');
  };

  const renderMainContent = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
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
        return <LogoutPage onNavigateToLogin={handleNavigateToLogin} />;
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

  // If logout or login page, show only the page without sidebar
  if (currentPage === 'logout' || currentPage === 'login') {
    return renderMainContent();
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
