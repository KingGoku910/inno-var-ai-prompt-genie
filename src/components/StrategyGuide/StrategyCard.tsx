import React from 'react';
import { PromptStrategy } from '../../types';
import { CopyButton } from '../common/CopyButton';
import { Lightbulb, Target, Award } from 'lucide-react';

interface StrategyCardProps {
  strategy: PromptStrategy;
  onCopy: () => void;
}

export const StrategyCard: React.FC<StrategyCardProps> = ({ strategy, onCopy }) => {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
  };

  const difficultyIcons = {
    beginner: Award,
    intermediate: Target,
    advanced: Lightbulb
  };

  const DifficultyIcon = difficultyIcons[strategy.difficulty];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <DifficultyIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {strategy.name}
          </h3>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[strategy.difficulty]}`}>
          {strategy.difficulty}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {strategy.description}
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Example Implementation:
          </h4>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
              {strategy.example}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Best Use Cases:
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {strategy.useCase}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <CopyButton
          text={`${strategy.name}: ${strategy.description}\n\nExample: ${strategy.example}\n\nUse Case: ${strategy.useCase}`}
          variant="primary"
          onCopy={onCopy}
        />
      </div>
    </div>
  );
};