import React from 'react';
import { Brain, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'builder', name: 'Prompt Builder' },
    { id: 'strategies', name: 'Strategy Guide' },
    { id: 'templates', name: 'Templates' },
    { id: 'analytics', name: 'Analytics' }
  ];

  return (
    <header className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src="https://imgur.com/Qbn547r.png" className="w-16 h-16" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                 AI-<span className="text-blue-600">Prompt</span>Genie
              </h1>
              <p className="text-xs text-gray-900 dark:text-gray-400">
                 by <a href="https://innovatex-ai.net">Innova<span className="text-blue-600 font-bold">TEX</span>-AI</a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-1 py-2 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
