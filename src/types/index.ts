export interface Platform {
  id: string;
  name: string;
  description: string;
  fields: string[];
}

export interface TechStack {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
}

export interface UILibrary {
  id: string;
  name: string;
  category: 'web' | 'mobile';
  techStacks: string[];
}

export interface Database {
  id: string;
  name: string;
  type: 'sql' | 'nosql';
}

export interface AIModel {
  id: string;
  name: string;
  provider: string;
}

export interface PromptStrategy {
  id: string;
  name: string;
  description: string;
  example: string;
  useCase: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Template {
  id: string;
  name: string;
  description: string;
  strategy: string;
  platform: string;
  content: string;
  category: string;
}

export interface AnalyticsData {
  promptsGenerated: number;
  templatesUsed: number;
  favoriteStrategy: string;
  mostUsedTechStack: string;
  productivityScore: number;
  strategyUsage: Record<string, number>;
  techStackUsage: Record<string, number>;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}