import { TechStack } from '../types';

export const techStacks: TechStack[] = [
  // Frontend Only
  { id: 'react', name: 'React', category: 'frontend' },
  { id: 'vue', name: 'Vue.js', category: 'frontend' },
  { id: 'astro', name: 'Astro', category: 'frontend' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend' },
  { id: 'svelte', name: 'Svelte', category: 'frontend' },
  { id: 'angular', name: 'Angular', category: 'frontend' },
  
  // Backend Only
  { id: 'node-express', name: 'Node.js + Express', category: 'backend' },
  { id: 'python-fastapi', name: 'Python + FastAPI', category: 'backend' },
  { id: 'django', name: 'Django', category: 'backend' },
  { id: 'rails', name: 'Ruby on Rails', category: 'backend' },
  { id: 'laravel', name: 'PHP + Laravel', category: 'backend' },
  { id: 'spring-boot', name: 'Java + Spring Boot', category: 'backend' },
  { id: 'dotnet', name: 'C# + .NET', category: 'backend' },
  { id: 'go-gin', name: 'Go + Gin', category: 'backend' },
  
  // Full Stack
  { id: 'mern', name: 'MERN', category: 'fullstack' },
  { id: 'mean', name: 'MEAN', category: 'fullstack' },
  { id: 't3', name: 'T3 Stack', category: 'fullstack' },
  { id: 'django-react', name: 'Django + React', category: 'fullstack' },
  { id: 'laravel-vue', name: 'Laravel + Vue', category: 'fullstack' },
  { id: 'rails-react', name: 'Rails + React', category: 'fullstack' },
  { id: 'flask-react', name: 'Flask + React', category: 'fullstack' },
  { id: 'lamp', name: 'LAMP', category: 'fullstack' },
  
  // Mobile
  { id: 'react-native', name: 'React Native', category: 'mobile' },
  { id: 'flutter', name: 'Flutter', category: 'mobile' },
  { id: 'swift', name: 'Swift', category: 'mobile' },
  { id: 'kotlin', name: 'Kotlin', category: 'mobile' },
  { id: 'xamarin', name: 'Xamarin', category: 'mobile' },
  { id: 'ionic', name: 'Ionic', category: 'mobile' },
  { id: 'nativescript', name: 'NativeScript', category: 'mobile' }
];