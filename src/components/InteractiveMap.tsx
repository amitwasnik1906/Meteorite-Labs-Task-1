import React from 'react';
import { Maximize2 } from 'lucide-react';

const InteractiveMap: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Map</h2>
          <p className="text-gray-600">
            Get an interactive, playful and visually appealing map that helps you navigate the noise
          </p>
        </div>
        
        <div className="relative border border-gray-400 rounded-2xl">
          <img 
            src="https://rexby-screenshot-service.netlify.app/map/asasteinars/norway/0.4" 
            alt="Interactive map of Norway" 
            className="w-full h-96 object-cover rounded-2xl"
          />
          <button className="absolute top-4 right-4 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Maximize2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
