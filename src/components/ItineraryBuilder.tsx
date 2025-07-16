import React from 'react';

const ItineraryBuilder: React.FC = () => {
  
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:py-10 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 sm:gap-8 lg:gap-10 bg-white">
        {/* Left Panel */}
        <div className="col-span-1 lg:col-span-4 flex flex-col order-1 lg:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
            Build Itinerary with my Spots
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed text-center lg:text-left">
            Start with a template or build your own itinerary from scratch. Add, remove, and rearrange activities to plan your perfect trip.
          </p>
          <div className="text-center lg:text-left">
            <span className="font-bold underline text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">
              Preview
            </span>
          </div>
        </div>

        {/* Itinerary Screenshot */}
        <div className="col-span-1 lg:col-span-5 flex items-center justify-center order-2 lg:order-2">
          <div className="w-full max-w-lg lg:max-w-none border border-gray-300 p-3 sm:p-4 rounded-xl lg:pl-4">
            <img
              src="https://www.rexby.com/itinerary-builder-screnshot-2x.png"
              alt="Itinerary builder interface showing travel planning with activities and timeline"
              className="w-full h-auto rounded-xl"
              style={{ maxWidth: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;