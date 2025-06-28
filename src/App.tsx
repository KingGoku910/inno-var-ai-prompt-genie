import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AnalyticsProvider } from './contexts/AnalyticsContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BoltBadge } from './components/common/BoltBadge';
import { PromptBuilder } from './components/PromptBuilder/PromptBuilder';
import { StrategyGuide } from './components/StrategyGuide/StrategyGuide';
import { Templates } from './components/Templates/Templates';
import { Analytics } from './components/Analytics/Analytics';

function App() {
  const [activeSection, setActiveSection] = useState('builder');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'builder':
        return <PromptBuilder />;
      case 'strategies':
        return <StrategyGuide />;
      case 'templates':
        return <Templates />;
      case 'analytics':
        return <Analytics />;
      default:
        return <PromptBuilder />;
    }
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <AnalyticsProvider>
          <div className="min-h-screen bg-white dark:bg-black flex flex-col transition-colors duration-200">
            <Header 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
            
            <main className="flex-1">
              {renderActiveSection()}
            </main>
            
            <Footer />
            <BoltBadge />
          </div>
        </AnalyticsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
