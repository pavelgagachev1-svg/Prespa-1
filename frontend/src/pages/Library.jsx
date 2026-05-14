import React, { useState } from 'react';
import { libraryResources } from '../data/mockData';
import { FileText, Droplets, BookOpen, ArrowLeft, Download } from 'lucide-react';

const Library = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  // Function to show the document viewer
  if (selectedDoc) {
    return (
      <div className="min-h-screen bg-white p-8 max-w-4xl mx-auto">
        <button 
          onClick={() => setSelectedDoc(null)}
          className="flex items-center text-emerald-600 mb-8 hover:underline"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Library
        </button>
        
        <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedDoc.title}</h1>
          <p className="text-emerald-600 font-semibold mb-6">{selectedDoc.type}</p>
          <hr className="mb-8 border-gray-200" />
          
          <div className="prose max-w-none text-gray-800 whitespace-pre-line leading-relaxed">
            {selectedDoc.content}
          </div>
        </div>
      </div>
    );
  }

  // Library Grid View
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Library</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our collection of research papers, agricultural guides, and interactive tools designed to help Prespa thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {libraryResources.map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedDoc(item)}
          >
            <div className="bg-emerald-50 p-4 rounded-xl mb-6">
              {item.icon === 'FileText' ? <FileText className="text-emerald-600" /> : <Droplets className="text-blue-600" />}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 mb-6 flex-grow">{item.description}</p>
            <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
              Access Resource
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
