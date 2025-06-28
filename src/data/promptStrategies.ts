import { PromptStrategy } from '../types';

export const promptStrategies: PromptStrategy[] = [
  {
    id: 'zero-shot',
    name: 'Zero-Shot Prompting',
    description: 'Direct task specification without examples',
    example: 'Create a React component for user authentication',
    useCase: 'Simple, straightforward tasks',
    difficulty: 'beginner'
  },
  {
    id: 'few-shot',
    name: 'Few-Shot Prompting',
    description: 'Provide examples to guide the model',
    example: 'Create a button component. Example: <Button variant="primary">Click me</Button>',
    useCase: 'Pattern recognition and consistency',
    difficulty: 'beginner'
  },
  {
    id: 'chain-of-thought',
    name: 'Chain-of-Thought',
    description: 'Break down complex problems step by step',
    example: 'Build an e-commerce cart: 1) Create state management 2) Add/remove items 3) Calculate totals',
    useCase: 'Complex problem solving',
    difficulty: 'intermediate'
  },
  {
    id: 'role-playing',
    name: 'Role-Playing',
    description: 'Assign specific roles or personas',
    example: 'Act as a senior React developer and review this code for best practices',
    useCase: 'Expert guidance and code reviews',
    difficulty: 'intermediate'
  },
  {
    id: 'tree-of-thoughts',
    name: 'Tree-of-Thoughts',
    description: 'Explore multiple solution paths',
    example: 'Consider 3 different state management approaches for this app and compare them',
    useCase: 'Exploring alternatives and optimization',
    difficulty: 'advanced'
  },
  {
    id: 'self-consistency',
    name: 'Self-Consistency',
    description: 'Generate multiple solutions and choose the best',
    example: 'Generate 3 different implementations and select the most efficient',
    useCase: 'Quality assurance and optimization',
    difficulty: 'advanced'
  },
  {
    id: 'iterative-refinement',
    name: 'Iterative Refinement',
    description: 'Progressively improve solutions',
    example: 'Start with basic implementation, then add error handling, then optimize performance',
    useCase: 'Incremental development',
    difficulty: 'intermediate'
  },
  {
    id: 'constraint-based',
    name: 'Constraint-Based',
    description: 'Define specific limitations and requirements',
    example: 'Build a component that must be under 100 lines and use only native CSS',
    useCase: 'Performance-critical applications',
    difficulty: 'intermediate'
  },
  {
    id: 'template-based',
    name: 'Template-Based',
    description: 'Use structured templates for consistency',
    example: 'Follow this pattern: Component name, props interface, implementation, tests',
    useCase: 'Standardized development workflows',
    difficulty: 'beginner'
  },
  {
    id: 'analogical',
    name: 'Analogical Reasoning',
    description: 'Use analogies to explain complex concepts',
    example: 'Create state management like a library system with check-in/check-out',
    useCase: 'Learning and teaching',
    difficulty: 'intermediate'
  },
  {
    id: 'metacognitive',
    name: 'Metacognitive',
    description: 'Think about the thinking process',
    example: 'Explain your decision-making process while building this component',
    useCase: 'Understanding reasoning and documentation',
    difficulty: 'advanced'
  },
  {
    id: 'socratic',
    name: 'Socratic Questioning',
    description: 'Guide through questions rather than direct answers',
    example: 'What potential issues might arise with this approach? How would you handle them?',
    useCase: 'Learning and problem discovery',
    difficulty: 'intermediate'
  },
  {
    id: 'contrastive',
    name: 'Contrastive Learning',
    description: 'Compare good vs bad examples',
    example: 'Show me both a poorly structured and well-structured React component',
    useCase: 'Best practices and anti-patterns',
    difficulty: 'intermediate'
  },
  {
    id: 'progressive-disclosure',
    name: 'Progressive Disclosure',
    description: 'Reveal information gradually',
    example: 'Start with basic functionality, then add advanced features one by one',
    useCase: 'Complex feature development',
    difficulty: 'intermediate'
  },
  {
    id: 'scenario-based',
    name: 'Scenario-Based',
    description: 'Use realistic use cases and scenarios',
    example: 'Build a todo app for a team of 10 developers with real-time collaboration',
    useCase: 'Real-world application development',
    difficulty: 'intermediate'
  },
  {
    id: 'decomposition',
    name: 'Problem Decomposition',
    description: 'Break large problems into smaller parts',
    example: 'Split this e-commerce app into: auth, products, cart, payment, orders',
    useCase: 'Large application architecture',
    difficulty: 'intermediate'
  },
  {
    id: 'specification-driven',
    name: 'Specification-Driven',
    description: 'Start with detailed technical specifications',
    example: 'API endpoints: GET /users, POST /users, response format: {id, name, email}',
    useCase: 'API and system design',
    difficulty: 'advanced'
  },
  {
    id: 'test-driven',
    name: 'Test-Driven',
    description: 'Define tests first, then implementation',
    example: 'Write tests for user registration, then implement the feature',
    useCase: 'Quality-focused development',
    difficulty: 'intermediate'
  },
  {
    id: 'performance-focused',
    name: 'Performance-Focused',
    description: 'Optimize for specific performance metrics',
    example: 'Build this component with < 100ms render time and minimal re-renders',
    useCase: 'High-performance applications',
    difficulty: 'advanced'
  },
  {
    id: 'accessibility-first',
    name: 'Accessibility-First',
    description: 'Design with accessibility as primary concern',
    example: 'Create a form that works perfectly with screen readers and keyboard navigation',
    useCase: 'Inclusive application development',
    difficulty: 'intermediate'
  },
  {
    id: 'error-handling',
    name: 'Error-Handling Focused',
    description: 'Emphasize robust error management',
    example: 'Build with comprehensive error boundaries and user-friendly error messages',
    useCase: 'Production-ready applications',
    difficulty: 'intermediate'
  },
  {
    id: 'security-first',
    name: 'Security-First',
    description: 'Prioritize security considerations',
    example: 'Implement authentication with XSS protection and secure token handling',
    useCase: 'Secure application development',
    difficulty: 'advanced'
  },
  {
    id: 'mobile-first',
    name: 'Mobile-First',
    description: 'Design for mobile devices primarily',
    example: 'Create a responsive design starting with 320px viewport',
    useCase: 'Mobile application development',
    difficulty: 'intermediate'
  },
  {
    id: 'api-first',
    name: 'API-First',
    description: 'Design APIs before implementing UI',
    example: 'Define REST endpoints and data models before building the frontend',
    useCase: 'Backend and API development',
    difficulty: 'intermediate'
  },
  {
    id: 'component-driven',
    name: 'Component-Driven',
    description: 'Build reusable, isolated components',
    example: 'Create atomic design components: atoms, molecules, organisms',
    useCase: 'Design system development',
    difficulty: 'intermediate'
  },
  {
    id: 'state-machine',
    name: 'State Machine Approach',
    description: 'Model complex states and transitions',
    example: 'Define states: loading, success, error, and valid transitions between them',
    useCase: 'Complex state management',
    difficulty: 'advanced'
  },
  {
    id: 'functional-programming',
    name: 'Functional Programming',
    description: 'Emphasize pure functions and immutability',
    example: 'Build using only pure functions, avoiding side effects and mutations',
    useCase: 'Functional architecture',
    difficulty: 'advanced'
  },
  {
    id: 'domain-driven',
    name: 'Domain-Driven Design',
    description: 'Model the business domain accurately',
    example: 'Create entities and value objects that reflect real business concepts',
    useCase: 'Enterprise application development',
    difficulty: 'advanced'
  },
  {
    id: 'event-driven',
    name: 'Event-Driven Architecture',
    description: 'Build around events and message passing',
    example: 'Implement using event sourcing and CQRS patterns',
    useCase: 'Scalable system architecture',
    difficulty: 'advanced'
  },
  {
    id: 'microservices',
    name: 'Microservices Pattern',
    description: 'Decompose into small, independent services',
    example: 'Split into user service, product service, order service with API gateway',
    useCase: 'Distributed system development',
    difficulty: 'advanced'
  }
];