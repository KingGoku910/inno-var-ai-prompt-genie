import React, { useState, useEffect } from 'react';
import { Wand2, Download, Settings, FileText } from 'lucide-react';
import { DropdownSelector } from '../common/DropdownSelector';
import { CopyButton } from '../common/CopyButton';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { platforms } from '../../data/platforms';
import { techStacks } from '../../data/techStacks';
import { uiLibraries } from '../../data/uiLibraries';
import { databases } from '../../data/databases';
import { aiModels } from '../../data/aiModels';
import { promptStrategies } from '../../data/promptStrategies';
import { useAnalytics } from '../../contexts/AnalyticsContext';

export const PromptBuilder: React.FC = () => {
    // --- STATE MANAGEMENT ---
    const [selectedPlatform, setSelectedPlatform] = useState('universal');
    const [selectedTechStack, setSelectedTechStack] = useState('');
    const [selectedUILibrary, setSelectedUILibrary] = useState('');
    const [selectedDatabase, setSelectedDatabase] = useState('');
    const [selectedAIModel, setSelectedAIModel] = useState('');
    const [selectedStrategy, setSelectedStrategy] = useState('');
    const [customFields, setCustomFields] = useState<Record<string, string>>({});
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    
    // --- CONTEXT & DERIVED STATE ---
    const { trackStrategy, trackTechStack, incrementPrompts } = useAnalytics();
    const selectedPlatformData = platforms.find(p => p.id === selectedPlatform);
    const filteredUILibraries = uiLibraries.filter(ui =>
        !selectedTechStack || ui.techStacks.includes(selectedTechStack)
    );

    // --- EFFECTS ---
    useEffect(() => {
        // Reset dependent selections when a parent selection changes
        if (selectedTechStack && !filteredUILibraries.find(ui => ui.id === selectedUILibrary)) {
            setSelectedUILibrary('');
        }
    }, [selectedTechStack, selectedUILibrary, filteredUILibraries]);

    // --- HANDLER FUNCTIONS ---
    const generatePrompt = async () => {
        if (!selectedPlatform || !selectedStrategy) return;
        setIsGenerating(true);

        // Track analytics
        if (selectedStrategy) trackStrategy(selectedStrategy);
        if (selectedTechStack) trackTechStack(selectedTechStack);

        // Simulate API call with 2-second delay
        setTimeout(() => {
            const platform = platforms.find(p => p.id === selectedPlatform);
            const strategy = promptStrategies.find(s => s.id === selectedStrategy);
            const techStack = techStacks.find(ts => ts.id === selectedTechStack);
            const uiLibrary = uiLibraries.find(ui => ui.id === selectedUILibrary);
            const database = databases.find(db => db.id === selectedDatabase);
            const aiModel = aiModels.find(ai => ai.id === selectedAIModel);

            let prompt = `# ${strategy?.name} Prompt for ${platform?.name}\n\n`;

            if (aiModel) prompt += `**Target AI Model:** ${aiModel.name} (${aiModel.provider})\n\n`;
            prompt += `**Platform:** ${platform?.name}\n`;
            prompt += `**Strategy:** ${strategy?.name}\n\n`;
            if (strategy?.description) prompt += `**Strategy Description:** ${strategy.description}\n\n`;
            if (techStack) prompt += `**Tech Stack:** ${techStack.name} (${techStack.category})\n`;
            if (uiLibrary) prompt += `**UI Library:** ${uiLibrary.name}\n`;
            if (database) prompt += `**Database:** ${database.name} (${database.type})\n`;
            
            prompt += '\n## Requirements\n\n';
            if (platform?.fields && platform.fields.length > 0) {
                platform.fields.forEach(field => {
                    const value = customFields[field] || `[${field.toUpperCase()}_PLACEHOLDER]`;
                    prompt += `**${field.charAt(0).toUpperCase() + field.slice(1)}:** ${value}\n`;
                });
            } else {
                 prompt += 'No platform-specific requirements provided.\n'
            }

            prompt += '\n## Implementation Guidelines\n\n';
            if (selectedPlatform === 'bolt') prompt += '- Use WebContainer-compatible technologies.\n- Optimize for browser-based runtime.\n';
            if (techStack) prompt += `- Follow ${techStack?.name} best practices.\n- Implement proper error handling.\n`;
            if (uiLibrary) prompt += `- Use ${uiLibrary?.name} components and styling.\n- Maintain a consistent design system.\n`;
            if (strategy?.useCase) prompt += `\n## Use Case\n${strategy.useCase}\n`;
            if (strategy?.example) prompt += `\n## Example\n${strategy.example}\n`;

            prompt += '\n## Success Criteria\n\n- Clean, maintainable code structure.\n- Proper error handling and validation.\n- Responsive and accessible design.\n- Performance-optimized implementation.\n- Comprehensive documentation.\n';
            
            setGeneratedPrompt(prompt);
            incrementPrompts();
            setIsGenerating(false);
        }, 2000);
    };

    const handleFieldChange = (fieldName: string, value: string) => {
        setCustomFields(prev => ({ ...prev, [fieldName]: value }));
    };

    const isGenerateDisabled = !selectedPlatform || !selectedStrategy;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* --- Centered Page Header --- */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    AI Prompt Builder
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                    Generate optimized, platform-specific prompts for any tech stack.
                </p>
            </div>

            {/* --- Main Input Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* --- Left Column: Configuration & Generate Button --- */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center space-x-3 mb-6">
                            <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Configuration
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DropdownSelector options={platforms.map(p => ({ ...p, category: 'Platform' }))} value={selectedPlatform} onChange={setSelectedPlatform} placeholder="Select target platform" label="Target Platform" />
                            <DropdownSelector options={promptStrategies.map(s => ({ ...s, category: s.difficulty }))} value={selectedStrategy} onChange={setSelectedStrategy} placeholder="Choose prompting strategy" label="Prompting Strategy" />
                            <DropdownSelector options={aiModels.map(ai => ({ ...ai, category: ai.provider }))} value={selectedAIModel} onChange={setSelectedAIModel} placeholder="Select AI model (optional)" label="Target AI Model" />
                            <DropdownSelector options={techStacks.map(ts => ({ ...ts, category: ts.category }))} value={selectedTechStack} onChange={setSelectedTechStack} placeholder="Choose technology stack" label="Tech Stack" />
                            <DropdownSelector options={filteredUILibraries.map(ui => ({ ...ui, category: ui.category }))} value={selectedUILibrary} onChange={setSelectedUILibrary} placeholder="Select UI library" label="UI Library" disabled={!selectedTechStack} />
                            <DropdownSelector options={databases.map(db => ({ ...db, category: db.type }))} value={selectedDatabase} onChange={setSelectedDatabase} placeholder="Choose database" label="Database" />
                        </div>
                    </div>
                    <button
                        onClick={generatePrompt}
                        disabled={isGenerateDisabled || isGenerating}
                        className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${isGenerateDisabled || isGenerating ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'}`}
                    >
                        <Wand2 className="w-6 h-6" />
                        <span>{isGenerating ? 'Generating...' : 'Generate Prompt'}</span>
                    </button>
                </div>

                {/* --- Right Column: Platform-Specific Fields or Placeholder --- */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Platform-Specific Fields
                    </h3>
                    {selectedPlatformData?.fields && selectedPlatformData.fields.length > 0 ? (
                        <div className="space-y-4">
                            {selectedPlatformData.fields.map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <textarea value={customFields[field] || ''} onChange={(e) => handleFieldChange(field, e.target.value)} placeholder={`Describe ${field} requirements...`} rows={4} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex-grow flex flex-col items-center justify-center text-center text-gray-400 dark:text-gray-500">
                           <FileText className="w-12 h-12 mb-4 opacity-50" />
                           <p className="text-sm">Platform-specific fields will appear here if the selected platform requires them.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* --- Full-Width Output Panel --- */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Generated Prompt</h3>
                    {generatedPrompt && !isGenerating && (
                        <div className="flex space-x-2">
                            <CopyButton text={generatedPrompt} />
                            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <Download className="w-4 h-4" />
                                <span>Download</span>
                            </button>
                        </div>
                    )}
                </div>
                <div className="min-h-[400px] max-h-[600px] overflow-y-auto rounded-lg bg-gray-50 dark:bg-gray-900 p-4 font-mono text-sm scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                    {isGenerating ? (
                        <div className="flex items-center justify-center h-full">
                           <LoadingSpinner text="Generating optimized prompt..." />
                        </div>
                    ) : generatedPrompt ? (
                        <pre className="whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200 leading-relaxed">
                            {generatedPrompt}
                        </pre>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 text-center">
                            <Wand2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Configure your settings and click "Generate Prompt" to get started</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};