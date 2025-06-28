import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const BoltBadge: React.FC = () => {
  const { isDark } = useTheme();
  
  const imageUrl = isDark 
    ? 'https://github.com/kickiniteasy/bolt-hackathon-badge/blob/main/src/public/bolt-badge/white_circle_360x360/white_circle_360x360.png?raw=true'
    : 'https://github.com/kickiniteasy/bolt-hackathon-badge/blob/main/src/public/bolt-badge/black_circle_360x360/black_circle_360x360.png?raw=true';

  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
      aria-label="Built with Bolt.new"
    >
      <img
        src={imageUrl}
        alt="Built with Bolt.new"
        className="w-16 h-16 rounded-full shadow-lg"
      />
    </a>
  );
};