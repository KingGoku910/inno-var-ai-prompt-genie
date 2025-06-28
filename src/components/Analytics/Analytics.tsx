import React from 'react';
import { BarChart3, TrendingUp, Award, Code, Target, Zap } from 'lucide-react';
import { useAnalytics } from '../../contexts/AnalyticsContext';

export const Analytics: React.FC = () => {
  const { analytics } = useAnalytics();

  const getTopStrategies = () => {
    return Object.entries(analytics.strategyUsage)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
  };

  const getProgressBarColor = (index: number) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-yellow-500',
      'bg-red-500'
    ];
    return colors[index % colors.length];
  };

  const topStrategies = getTopStrategies();
  const totalStrategyUses = Object.values(analytics.strategyUsage).reduce((sum, count) => sum + count, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Analytics Dashboard
          </h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Track your prompt engineering progress and optimization metrics.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Prompts Generated
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.promptsGenerated}
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Templates Copied
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.templatesUsed}
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Most Used Tech Stack
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {analytics.mostUsedTechStack || 'None yet'}
              </p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Productivity Score
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.productivityScore}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Usage Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Prompt Builder Strategies
          </h3>
          {topStrategies.length > 0 ? (
            <div className="space-y-4">
              {topStrategies.map(([strategy, count], index) => {
                const percentage = totalStrategyUses > 0 ? (count / totalStrategyUses) * 100 : 0;
                const barColor = getProgressBarColor(index);
                
                return (
                  <div key={strategy} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${barColor.replace('bg-', 'text-')}`}>
                        {strategy.charAt(0).toUpperCase() + strategy.slice(1).replace('-', ' ')}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {count} uses
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${barColor} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                No strategy data yet. Start generating prompts to see your usage patterns!
              </p>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Favorite Strategy
          </h3>
          {analytics.favoriteStrategy ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {analytics.favoriteStrategy.charAt(0).toUpperCase() + 
                 analytics.favoriteStrategy.slice(1).replace('-', ' ')}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Most frequently used strategy
              </p>
              <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Used {analytics.strategyUsage[analytics.favoriteStrategy]} times
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Use different strategies to discover your favorite!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Productivity Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Productivity Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-electric-blue rounded-lg">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {Object.keys(analytics.strategyUsage).length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Strategies Explored
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-electric-blue rounded-lg">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {Object.keys(analytics.techStackUsage).length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tech Stacks Used
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-electric-blue rounded-lg">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {analytics.productivityScore > 75 ? 'Expert' : 
               analytics.productivityScore > 50 ? 'Advanced' :
               analytics.productivityScore > 25 ? 'Intermediate' : 'Beginner'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Skill Level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};