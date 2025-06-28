import { AIModel } from '../types';

export const aiModels: AIModel[] = [
  { id: 'gpt-4', name: 'GPT-4', provider: 'OpenAI' },
  { id: 'gpt-3.5', name: 'GPT-3.5 Turbo', provider: 'OpenAI' },
  { id: 'claude-3', name: 'Claude 3', provider: 'Anthropic' },
  { id: 'claude-4', name: 'Claude 4', provider: 'Anthropic' },
  { id: 'gemini-pro', name: 'Gemini Pro', provider: 'Google' },
  { id: 'gemini-flash', name: 'Gemini Flash', provider: 'Google' },
  { id: 'llama-2', name: 'Llama 2', provider: 'Meta' },
  { id: 'llama-3', name: 'Llama 3', provider: 'Meta' },
  { id: 'mixtral', name: 'Mixtral 8x7B', provider: 'Mistral' }
];