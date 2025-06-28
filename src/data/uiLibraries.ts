import { UILibrary } from '../types';

export const uiLibraries: UILibrary[] = [
  // Web UI Libraries
  { id: 'tailwind', name: 'Tailwind CSS', category: 'web', techStacks: ['react', 'vue', 'astro', 'nextjs', 'svelte', 'angular'] },
  { id: 'shadcn', name: 'Shadcn/ui', category: 'web', techStacks: ['react', 'nextjs'] },
  { id: 'mui', name: 'Material UI', category: 'web', techStacks: ['react', 'nextjs'] },
  { id: 'bootstrap', name: 'Bootstrap', category: 'web', techStacks: ['react', 'vue', 'angular'] },
  { id: 'chakra', name: 'Chakra UI', category: 'web', techStacks: ['react', 'nextjs'] },
  { id: 'antd', name: 'Ant Design', category: 'web', techStacks: ['react', 'vue', 'angular'] },
  
  // Mobile UI Libraries
  { id: 'nativewind', name: 'NativeWind', category: 'mobile', techStacks: ['react-native'] },
  { id: 'material-android', name: 'Material Components (Android)', category: 'mobile', techStacks: ['kotlin'] },
  { id: 'swiftui', name: 'SwiftUI', category: 'mobile', techStacks: ['swift'] },
  { id: 'flutter-material', name: 'Flutter Material', category: 'mobile', techStacks: ['flutter'] },
  { id: 'ionic-components', name: 'Ionic Components', category: 'mobile', techStacks: ['ionic'] }
];