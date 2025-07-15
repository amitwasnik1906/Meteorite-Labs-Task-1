import React from 'react';
import { Star } from 'lucide-react';

const GuideHero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-14">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="" style={{ width: '325px', height: '406px' }}>
          <img
            src="https://cdn.prod.rexby.com/image/d80440c7-36f3-49f7-b69b-b390f0cf7b8f?format=webp&width=1200&height=1500"
            alt="Norway landscape with hammock"
            className="object-cover rounded-2xl w-full h-full"
            style={{ width: '325px', height: '406px' }}
          />
        </div>

        <div className="lg:w-2/3 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Norway Guide</h1>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://cdn.prod.rexby.com/image/90ca806e-c988-4993-8bcb-302fff6b27db?format=webp&width=64&height=64"
                alt="Åsa Steinars"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Guide by Åsa Steinars</span>
                  <span className="text-gray-600">Norway</span>
                  <span className="text-gray-600 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-black-500 fill-current" />
                    <span>New</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I
              often come back and I love this country almost as much as Iceland. Last summer I spent 3
              months on the road with my van exploring everything from the south tip up to Lofoten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This guide is my best tips for Norway to make sure you get the most out of your trip. It's
              focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best
              areas to explore in Norway.
            </p>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 h-12 px-6 py-3 border border-gray-600 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors">
              Preview
            </button>
            <div className="flex flex-col items-center flex-1">
              <button className="flex-1 h-12 w-full px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors">
                Get Access
              </button>
              <p className="text-sm text-gray-500 text-center mt-2">Used for 100+ trips</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GuideHero;
