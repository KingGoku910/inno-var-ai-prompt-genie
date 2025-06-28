import { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'react-component',
    name: 'React Component Template',
    description: 'Zero-shot template for React components',
    strategy: 'zero-shot',
    platform: 'universal',
    category: 'Frontend',
    content: `Create a React component with the following specifications:

Component Name: [COMPONENT_NAME]
Purpose: [COMPONENT_PURPOSE]
Props: [COMPONENT_PROPS]
Styling: [STYLING_APPROACH]
Behavior: [COMPONENT_BEHAVIOR]

Requirements:
- Use TypeScript for type safety
- Include proper prop validation
- Implement responsive design
- Add accessibility features
- Include error handling`
  },
  {
    id: 'api-design',
    name: 'API Design Template',
    description: 'Specification-driven API development',
    strategy: 'specification-driven',
    platform: 'universal',
    category: 'Backend',
    content: `Design a RESTful API with the following specifications:

Endpoint: [API_ENDPOINT]
Method: [HTTP_METHOD]
Purpose: [API_PURPOSE]
Request Body: [REQUEST_SCHEMA]
Response Format: [RESPONSE_SCHEMA]
Authentication: [AUTH_METHOD]
Rate Limiting: [RATE_LIMITS]

Requirements:
- Include OpenAPI documentation
- Implement proper error responses
- Add input validation
- Include security measures
- Design for scalability`
  },
  {
    id: 'testing-template',
    name: 'Test-Driven Development',
    description: 'TDD approach for feature development',
    strategy: 'test-driven',
    platform: 'universal',
    category: 'Testing',
    content: `Implement feature using Test-Driven Development:

Feature: [FEATURE_NAME]
User Story: [USER_STORY]
Acceptance Criteria: [ACCEPTANCE_CRITERIA]

Test Cases:
1. [TEST_CASE_1]
2. [TEST_CASE_2]
3. [TEST_CASE_3]

Implementation Steps:
1. Write failing tests
2. Implement minimal code to pass
3. Refactor and optimize
4. Add integration tests
5. Document the feature`
  },
  {
    id: 'performance-optimization',
    name: 'Performance Optimization',
    description: 'Performance-focused development template',
    strategy: 'performance-focused',
    platform: 'universal',
    category: 'Optimization',
    content: `Optimize application performance:

Target Metrics:
- Load Time: [TARGET_LOAD_TIME]
- First Contentful Paint: [FCP_TARGET]
- Largest Contentful Paint: [LCP_TARGET]
- Time to Interactive: [TTI_TARGET]

Optimization Areas:
1. [OPTIMIZATION_AREA_1]
2. [OPTIMIZATION_AREA_2]
3. [OPTIMIZATION_AREA_3]

Implementation:
- Code splitting and lazy loading
- Image optimization
- Caching strategies
- Bundle size reduction
- Performance monitoring`
  },
  {
    id: 'accessibility-audit',
    name: 'Accessibility Implementation',
    description: 'Accessibility-first development approach',
    strategy: 'accessibility-first',
    platform: 'universal',
    category: 'Accessibility',
    content: `Create accessible application:

WCAG Level: [WCAG_LEVEL]
Target Users: [USER_GROUPS]
Assistive Technologies: [AT_SUPPORT]

Accessibility Requirements:
1. Keyboard Navigation: [KEYBOARD_SUPPORT]
2. Screen Reader Support: [SR_SUPPORT]
3. Color Contrast: [CONTRAST_RATIO]
4. Focus Management: [FOCUS_STRATEGY]

Implementation:
- Semantic HTML structure
- ARIA labels and roles
- Alt text for images
- Focus indicators
- Error announcements
- Testing with real users`
  },
  {
    id: 'security-implementation',
    name: 'Security-First Development',
    description: 'Security-focused implementation template',
    strategy: 'security-first',
    platform: 'universal',
    category: 'Security',
    content: `Implement secure application:

Security Requirements:
- Authentication: [AUTH_METHOD]
- Authorization: [AUTHZ_STRATEGY]
- Data Protection: [DATA_PROTECTION]
- Input Validation: [VALIDATION_RULES]

Security Measures:
1. XSS Prevention: [XSS_PROTECTION]
2. CSRF Protection: [CSRF_TOKENS]
3. SQL Injection Prevention: [SQLI_PROTECTION]
4. Secure Headers: [SECURITY_HEADERS]

Implementation:
- Input sanitization
- Output encoding
- Secure session management
- Rate limiting
- Security testing
- Vulnerability scanning`
  },
  {
    id: 'mobile-responsive',
    name: 'Mobile-First Design',
    description: 'Mobile-first responsive development',
    strategy: 'mobile-first',
    platform: 'universal',
    category: 'Mobile',
    content: `Create mobile-first responsive design:

Breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

Mobile Considerations:
1. Touch-friendly interfaces
2. Optimized loading times
3. Offline functionality
4. Progressive Web App features

Implementation:
- Flexible grid systems
- Scalable images
- Touch gestures
- Performance optimization
- Cross-device testing`
  },
  {
    id: 'microservices-architecture',
    name: 'Microservices Implementation',
    description: 'Microservices architecture template',
    strategy: 'microservices',
    platform: 'universal',
    category: 'Architecture',
    content: `Design microservices architecture:

Services:
1. [SERVICE_1]: [SERVICE_RESPONSIBILITY]
2. [SERVICE_2]: [SERVICE_RESPONSIBILITY]
3. [SERVICE_3]: [SERVICE_RESPONSIBILITY]

Communication:
- API Gateway: [GATEWAY_SOLUTION]
- Service Discovery: [DISCOVERY_METHOD]
- Load Balancing: [LB_STRATEGY]

Implementation:
- Container orchestration
- Service mesh
- Distributed tracing
- Circuit breaker pattern
- Event-driven communication
- Monitoring and logging`
  },
  {
    id: 'bolt-web-app',
    name: 'Bolt.new Web Application',
    description: 'Bolt.new optimized application template',
    strategy: 'template-based',
    platform: 'bolt',
    category: 'Web App',
    content: `Build web application for Bolt.new:

STACK: [TECH_STACK]
FEATURES: [FEATURE_LIST]
LAYOUT: [LAYOUT_STRUCTURE]
COMPONENTS: [COMPONENT_LIST]
INTERACTIVITY: [INTERACTION_FLOW]

Bolt.new Considerations:
- WebContainer compatibility
- No native binaries
- Browser-based runtime
- Limited file system access
- Optimized for web technologies

Implementation:
- Vite for development server
- Browser-compatible dependencies
- Client-side routing
- Progressive enhancement
- Performance optimization`
  },
  {
    id: 'chain-of-thought-debug',
    name: 'Debugging with Chain-of-Thought',
    description: 'Systematic debugging approach',
    strategy: 'chain-of-thought',
    platform: 'universal',
    category: 'Debugging',
    content: `Debug issue using systematic approach:

Problem: [ISSUE_DESCRIPTION]
Expected Behavior: [EXPECTED_RESULT]
Actual Behavior: [ACTUAL_RESULT]

Debugging Steps:
1. Reproduce the issue consistently
2. Identify the scope and impact
3. Check recent changes and logs
4. Isolate the problem area
5. Form hypotheses about root cause
6. Test each hypothesis systematically
7. Implement and verify the fix
8. Add tests to prevent regression

Investigation Process:
- Console logs and debugging tools
- Code review and static analysis
- Performance profiling
- Error monitoring
- User feedback analysis`
  }
];