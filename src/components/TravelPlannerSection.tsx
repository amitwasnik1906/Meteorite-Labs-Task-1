import React from 'react';

const TravelPlannerSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Your Personal Travel Planner</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ask me Anything</h3>
            <p className="text-gray-600 mb-4">
              Rexby is trained on Ása Steinars local knowledge, enabling it to answer questions just like Ása Steinars, but faster
            </p>
            <button className="text-black-600 underline font-bold hover:text-teal-700">
              Preview
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3 mb-4">
            <img
              src="https://cdn.prod.rexby.com/image/90ca806e-c988-4993-8bcb-302fff6b27db?format=webp&width=80&height=80"
              alt="Åsa Steinars"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900">Åsa Steinars</div>
              <div className="text-sm text-gray-500">Digital version</div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              Hi there, I am Åsa Steinars AI. I have been trained to answer travel questions just like Åsa
              Steinars would do in person, but faster.
            </p>


            <div className="bg-gray-50 rounded-lg p-3">
              <hr />
              <p className="text-gray-800 text-sm font-bold py-2">💭 What is the best season to visit?</p>
              <hr />
            </div>

            <div className="text-gray-500 text-sm">Thinking...</div>

            <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
              <input
                type="text"
                placeholder="Message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
