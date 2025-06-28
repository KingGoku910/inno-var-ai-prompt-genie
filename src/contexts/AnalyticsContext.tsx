import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AnalyticsData } from '../types';

interface AnalyticsContextType {
  analytics: AnalyticsData;
  updateAnalytics: (updates: Partial<AnalyticsData>) => void;
  incrementPrompts: () => void;
  incrementTemplates: () => void;
  trackStrategy: (strategy: string) => void;
  trackTechStack: (techStack: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    promptsGenerated: 0,
    templatesUsed: 0,
    favoriteStrategy: '',
    mostUsedTechStack: '',
    productivityScore: 0,
    strategyUsage: {},
    techStackUsage: {}
  });

  const updateAnalytics = (updates: Partial<AnalyticsData>) => {
    setAnalytics(prev => ({ ...prev, ...updates }));
  };

  const incrementPrompts = () => {
    setAnalytics(prev => ({
      ...prev,
      promptsGenerated: prev.promptsGenerated + 1,
      productivityScore: calculateProductivityScore(prev.promptsGenerated + 1, prev.strategyUsage, prev.techStackUsage)
    }));
  };

  const incrementTemplates = () => {
    setAnalytics(prev => ({
      ...prev,
      templatesUsed: prev.templatesUsed + 1
    }));
  };

  const trackStrategy = (strategy: string) => {
    setAnalytics(prev => {
      const newStrategyUsage = {
        ...prev.strategyUsage,
        [strategy]: (prev.strategyUsage[strategy] || 0) + 1
      };
      
      const favoriteStrategy = Object.entries(newStrategyUsage)
        .sort(([,a], [,b]) => b - a)[0]?.[0] || '';

      return {
        ...prev,
        strategyUsage: newStrategyUsage,
        favoriteStrategy,
        productivityScore: calculateProductivityScore(prev.promptsGenerated, newStrategyUsage, prev.techStackUsage)
      };
    });
  };

  const trackTechStack = (techStack: string) => {
    setAnalytics(prev => {
      const newTechStackUsage = {
        ...prev.techStackUsage,
        [techStack]: (prev.techStackUsage[techStack] || 0) + 1
      };
      
      const mostUsedTechStack = Object.entries(newTechStackUsage)
        .sort(([,a], [,b]) => b - a)[0]?.[0] || '';

      return {
        ...prev,
        techStackUsage: newTechStackUsage,
        mostUsedTechStack,
        productivityScore: calculateProductivityScore(prev.promptsGenerated, prev.strategyUsage, newTechStackUsage)
      };
    });
  };

  const calculateProductivityScore = (
    prompts: number, 
    strategies: Record<string, number>, 
    techStacks: Record<string, number>
  ): number => {
    const strategiesUsed = Object.keys(strategies).length;
    const techStacksUsed = Object.keys(techStacks).length;
    return Math.min(100, (prompts * 2) + (strategiesUsed * 5) + (techStacksUsed * 3));
  };

  return (
    <AnalyticsContext.Provider value={{
      analytics,
      updateAnalytics,
      incrementPrompts,
      incrementTemplates,
      trackStrategy,
      trackTechStack
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
};