import React, { useState } from 'react';
import { Shield, Users, BookOpen, Target, BarChart3, Trophy, Settings, Menu, X } from 'lucide-react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import EmployeeDashboard from './components/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard';
import TrainingModule from './components/TrainingModule';
import PhishingSimulation from './components/PhishingSimulation';
import RiskAssessment from './components/RiskAssessment';

type ViewType = 'landing' | 'login' | 'signup' | 'employee' | 'admin' | 'training' | 'phishing' | 'risk';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'employee', label: 'Employee Dashboard', icon: Users },
    { id: 'admin', label: 'Admin Dashboard', icon: Settings },
    { id: 'training', label: 'Training', icon: BookOpen },
    { id: 'phishing', label: 'Phishing Sim', icon: Target },
    { id: 'risk', label: 'Risk Assessment', icon: BarChart3 },
  ];

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentView} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentView} />;
      case 'signup':
        return <SignupPage onNavigate={setCurrentView} />;
      case 'employee':
        return <EmployeeDashboard onNavigate={setCurrentView} />;
      case 'admin':
        return <AdminDashboard onNavigate={setCurrentView} />;
      case 'training':
        return <TrainingModule onNavigate={setCurrentView} />;
      case 'phishing':
        return <PhishingSimulation onNavigate={setCurrentView} />;
      case 'risk':
        return <RiskAssessment onNavigate={setCurrentView} />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  if (currentView === 'landing' || currentView === 'login' || currentView === 'signup') {
    return renderCurrentView();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentView('landing')}
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-all duration-200 group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-200">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  CyberGuard Pro
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id as ViewType)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      currentView === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden lg:block">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2 rounded-xl hover:bg-white/60 transition-all duration-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentView(item.id as ViewType);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      currentView === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;