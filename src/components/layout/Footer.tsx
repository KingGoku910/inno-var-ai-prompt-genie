import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              About Inno-Var AI
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              An intelligent AI prompt engineering platform that democratizes advanced 
              prompt techniques for developers across all tech stacks and platforms.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Features
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                30+ Prompt Strategies
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <Code className="w-4 h-4 mr-2 text-green-500" />
                Platform-Specific Generation
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <Heart className="w-4 h-4 mr-2 text-red-500" />
                Production-Ready Templates
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Supported Platforms
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
              <div>• Bolt.new</div>
              <div>• Lovable.ai</div>
              <div>• v0 (Vercel)</div>
              <div>• Firebase Studio</div>
              <div>• Replit Agent</div>
              <div>• Cursor IDE</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Built with ❤️ for the developer community • 
            <span className="ml-1">Powered by advanced prompt engineering</span>
          </p>
        </div>
      </div>
    </footer>
  );
};