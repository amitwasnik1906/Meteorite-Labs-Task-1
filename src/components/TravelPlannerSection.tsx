import React from 'react';

const TravelPlannerSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 text-center lg:text-left">
        Your Personal Travel Planner
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Ask me Anything
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Rexby is trained on Ása Steinars local knowledge, enabling it to answer questions just like Ása Steinars, but faster
            </p>
            <button className="text-black-600 underline font-bold hover:text-teal-700 text-sm sm:text-base">
              Preview
            </button>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-10 order-1 lg:order-2">
          {/* Header */}
          <div className="flex items-start space-x-3 mb-4 sm:mb-6">
            <img
              src="https://cdn.prod.rexby.com/image/90ca806e-c988-4993-8bcb-302fff6b27db?format=webp&width=80&height=80"
              alt="Åsa Steinars"
              className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-500 rounded-lg flex-shrink-0"
            />
            <div>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Åsa Steinars</div>
              <div className="text-xs sm:text-sm text-gray-500">Digital version</div>
            </div>
          </div>

          {/* Chat Content */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Hi there, I am Åsa Steinars AI. I have been trained to answer travel questions just like Åsa
              Steinars would do in person, but faster.
            </p>
            
            {/* Question Bubble */}
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
              <div className="border-t border-gray-200 mb-2"></div>
              <p className="text-gray-800 text-sm sm:text-base font-bold py-2">
                💭 What is the best season to visit?
              </p>
              <div className="border-t border-gray-200 mt-2"></div>
            </div>
            
            {/* Thinking indicator */}
            <div className="text-gray-500 text-xs sm:text-sm">Thinking...</div>
            
            {/* Input Area */}
            <div className="flex items-center space-x-2 pt-3 sm:pt-4 border-t border-gray-100">
              <input
                type="text"
                placeholder="Message..."
                className="flex-1 px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
              />
              <button className="p-2 sm:p-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPlannerSection;