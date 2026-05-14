import React, { useState } from 'react';
import { libraryResources } from '../data/mockData';
import { FileText, Droplets, Video, Archive, Mic, X, BookOpen } from 'lucide-react';

const Library = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  // Helper to choose the right icon
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-8 h-8 text-emerald-600" />;
      case 'Droplets': return <Droplets className="w-8 h-8 text-blue-600" />;
      case 'Video': return <Video className="w-8 h-8 text-purple-600" />;
      case 'Archive': return <Archive className="w-8 h-8 text-amber-600" />;
      case 'Mic': return <Mic className="w-8 h-8 text-rose-600" />;
      default: return <BookOpen className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Library</h1>
          <p className="text-lg text-gray-600">Access our collection of guides, research, and community archives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {libraryResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{getIcon(resource.icon)}</div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{resource.type}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              <button 
                onClick={() => setSelectedResource(resource)}
                className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Access Resource
              </button>
            </div>
          ))}
        </div>

        {/* MODAL / POP-UP VIEWER */}
        {selectedResource && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h2 className="text-xl font-bold text-gray-800">{selectedResource.title}</h2>
                <button 
                  onClick={() => setSelectedResource(null)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto bg-white">
                <div className="prose max-w-none">
                  {/* We use whitespace: pre-line to respect the line breaks in our content string */}
                  <div style={{ whiteSpace: 'pre-line' }} className="text-gray-800 leading-relaxed font-serif text-lg">
                    {selectedResource.content}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
                <button 
                  onClick={() => setSelectedResource(null)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
