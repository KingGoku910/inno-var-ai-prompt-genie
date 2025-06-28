import { Platform } from '../types';

export const platforms: Platform[] = [
  {
    id: 'universal',
    name: 'Universal (Default)',
    description: 'Generic prompt template for any platform',
    fields: ['Describe Your App', 'features', 'design']
  },
  {
    id: 'bolt',
    name: 'Bolt.new (StackBlitz)',
    description: 'Optimized for Bolt.new WebContainer environment',
    fields: ['Describe Your App', 'features', 'design']
  },
  {
    id: 'lovable',
    name: 'Lovable.ai',
    description: 'Tailored for Lovable.ai development platform',
    fields: ['Describe Your App', 'features', 'design']
  },
  {
    id: 'firebase',
    name: 'Firebase Studio',
    description: 'Firebase-focused development prompts',
    fields: ['Describe Your App', 'features', 'design']
  },
  {
    id: 'v0',
    name: 'v0 (Vercel)',
    description: 'Optimized for Vercel v0 component generation',
    fields: ['Describe Your App', 'features', 'design']
  },
  {
    id: 'replit',
    name: 'Replit Agent',
    description: 'Replit Agent specific prompts',
    fields: ['Describe Your App', 'features', 'design']
  },
  {
    id: 'cursor',
    name: 'Cursor IDE',
    description: 'Cursor IDE development prompts',
    fields: ['Describe Your App', 'features', 'design']
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot Workspace',
    description: 'GitHub Copilot Workspace prompts',
   fields: ['Describe Your App', 'features', 'design']
  }
];