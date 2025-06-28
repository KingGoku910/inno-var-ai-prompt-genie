import React, { useState } from 'react';
import { Template } from '../../types';
import { CopyButton } from '../common/CopyButton';
import { Download, FileText, Tag } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onCopy: () => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template, onCopy }) => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleDownload = (format: 'txt' | 'md' | 'pdf') => {
    const content = template.content;
    const filename = `${template.name.replace(/\s+/g, '_').toLowerCase()}.${format}`;
    
    if (format === 'pdf') {
      // For PDF, we'll just download as text for now
      // In a real app, you'd use a PDF library
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename.replace('.pdf', '.txt');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      const mimeType = format === 'md' ? 'text/markdown' : 'text/plain';
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
    
    setShowDownloadModal(false);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {template.name}
            </h3>
          </div>
          <button
            onClick={() => setShowDownloadModal(true)}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {template.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <Tag className="w-3 h-3 mr-1" />
            {template.strategy}
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
            {template.platform}
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
            {template.category}
          </span>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3 mb-4">
          <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono max-h-32 overflow-y-auto">
            {template.content.substring(0, 200)}...
          </pre>
        </div>

        <div className="flex justify-center">
          <CopyButton
            text={template.content}
            variant="primary"
            onCopy={onCopy}
          />
        </div>
      </div>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Download Template
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Choose your preferred export format:
            </p>
            <div className="space-y-2">
              <button
                onClick={() => handleDownload('txt')}
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Plain Text (.txt)
              </button>
              <button
                onClick={() => handleDownload('md')}
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Markdown (.md)
              </button>
              <button
                onClick={() => handleDownload('pdf')}
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                PDF (.pdf)
              </button>
            </div>
            <button
              onClick={() => setShowDownloadModal(false)}
              className="w-full mt-4 px-4 py-2 bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};