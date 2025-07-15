import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

const ItineraryBuilder: React.FC = () => {
  const days = [
    { date: 'Tue 11 apr', activities: ['Hot Spring', 'Text', 'Photospot'] },
    { date: 'Wed 12 apr', activities: ['Hike', 'Text', 'Sightseeing', 'Text', 'Stay'] },
    { date: 'Thu 13 apr', activities: ['Waterfall'] }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-10 bg-white">
        {/* Left Panel */}
        <div className="col-span-4 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Itinerary with my Spots            </h2>
          <p className="text-gray-600 mb-6">
            Start with a template or build your own itinerary from scratch. Add, remove, and rearrange activities to plan your perfect trip.
          </p>
          <span className='font-bold underline text-gray-900 mb-6'>Preview</span>

        </div>

        {/* Itinerary Days */}
        <div className="col-span-5 flex items-center justify-center pl-4 border border-gray-300 p-6 rounded-xl">
          <img
            src="https://www.rexby.com/itinerary-builder-screnshot-2x.png"
            alt=""
            style={{ maxWidth: "100%", width: "680px", height: "auto" }}
            className="rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;
