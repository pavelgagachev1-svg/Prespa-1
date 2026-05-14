import React, { useState } from 'react';
import { libraryResources } from '../data/mockData';
import { FileText, Droplets, ArrowLeft } from 'lucide-react';

const Library = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  // --- Document Viewer View ---
  // We show this when a document is selected to give the reader a focused experience
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

  // --- Main Library View (Hero + Grid) ---
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Merged Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&h=800&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 to-purple-900/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Library Hub
          </h1>
          <p className="text-xl text-indigo-100">
            Knowledge and resources for a sustainable future
          </p>
        </div>
      </section>

      {/* Grid Content Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Library</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of research papers, agricultural guides, and interactive tools designed to help Prespa thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {libraryResources.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => setSelectedDoc(item)}
            >
              <div className="bg-emerald-50 p-4 rounded-xl mb-6 group-hover:bg-emerald-100 transition-colors">
                {item.icon === 'FileText' ? (
                  <FileText className="text-emerald-600" /> 
                ) : (
                  <Droplets className="text-blue-600" />
                )}
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
    </div>
  );
};

export default Library;
