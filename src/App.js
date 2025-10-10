import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
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
  const [currentPage, setCurrentPage] = useState('homepage');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setCurrentPage('homepage');
  };

  const handleNavigateToLogin = () => {
    setCurrentPage('login');
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
      case 'homepage':
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
    return (
      <div className="app-layout">
        <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="main-content-with-header">
          {renderMainContent()}
        </div>
      </div>
    );
  }

  return (
    <div className={`app-layout ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
      <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="homepage">
        <Sidebar onNavigate={handleNavigation} currentPage={currentPage} isOpen={isSidebarOpen} />
        
        {currentPage === 'company-details' ? (
          <div className="main-content-with-header">
            {renderMainContent()}
          </div>
        ) : (
          <div className={`main-content ${currentPage === 'company-info' || currentPage === 'user-settings' || currentPage === 'templates' || currentPage === 'usage-logs' || currentPage === 'api-integration' || currentPage === 'billing-invoice' ? 'full-width' : ''}`}>
            {renderMainContent()}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
