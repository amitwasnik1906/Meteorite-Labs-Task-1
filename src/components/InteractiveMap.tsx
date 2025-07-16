import React from 'react';
import { Maximize2 } from 'lucide-react';
import { Link } from "react-router-dom";

const InteractiveMap: React.FC = () => {
  return (
    <Link to={"/map"}>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-10 md:py-12">
        <div className="space-y-4 sm:space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Interactive Map
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Get an interactive, playful and visually appealing map that helps you navigate the noise
            </p>
          </div>

          <div className="relative border border-gray-400 rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src="https://rexby-screenshot-service.netlify.app/map/asasteinars/norway/0.4"
              alt="Interactive map of Norway"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover"
            />
            <button className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow touch-manipulation">
              <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InteractiveMap;