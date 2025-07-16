import React, { useState, useRef, useEffect } from 'react';
import LeafletMap from '../components/LeafletMap';
import { useNavigate } from 'react-router-dom';

// Types
interface Location {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  locked?: boolean;
  category: string;
}

interface ImageCard {
  id: string;
  title: string;
  locationId: string;
  imageUrl: string;
  category: string;
}

// Mock data
const locations: Location[] = [
  { id: '1', name: 'Lofoten Islands', country: 'Norway', lat: 68.2, lng: 13.6, category: 'mountains' },
  { id: '2', name: 'Geirangerfjord', country: 'Norway', lat: 62.1, lng: 7.0, category: 'fjords' },
  { id: '3', name: 'Tromsø', country: 'Norway', lat: 69.6, lng: 18.9, locked: true, category: 'cities' },
  { id: '4', name: 'Bergen', country: 'Norway', lat: 60.4, lng: 5.3, category: 'cities' },
  { id: '5', name: 'Preikestolen', country: 'Norway', lat: 58.9, lng: 6.2, category: 'mountains' },
  { id: '6', name: 'Stockholm', country: 'Sweden', lat: 59.3, lng: 18.1, category: 'cities' },
  { id: '7', name: 'Göteborg', country: 'Sweden', lat: 57.7, lng: 11.9, category: 'cities' },
  { id: '8', name: 'Helsinki', country: 'Finland', lat: 60.2, lng: 24.9, category: 'cities' },
  { id: '9', name: 'Rovaniemi', country: 'Finland', lat: 66.5, lng: 25.7, locked: true, category: 'arctic' },
  { id: '10', name: 'Reykjavik', country: 'Iceland', lat: 64.1, lng: -21.9, category: 'cities' },
  { id: '11', name: 'Blue Lagoon', country: 'Iceland', lat: 63.9, lng: -22.4, category: 'nature' },
  { id: '12', name: 'Flåm', country: 'Norway', lat: 60.86, lng: 7.11, category: 'fjords' },
  { id: '13', name: 'Ålesund', country: 'Norway', lat: 62.47, lng: 6.15, category: 'cities' },
  { id: '14', name: 'Kirkenes', country: 'Norway', lat: 69.72, lng: 30.05, category: 'arctic' },
  { id: '15', name: 'Narvik', country: 'Norway', lat: 68.44, lng: 17.42, category: 'cities' },
  { id: '16', name: 'Trondheim', country: 'Norway', lat: 63.43, lng: 10.39, category: 'cities' },
  { id: '17', name: 'Oslo', country: 'Norway', lat: 59.91, lng: 10.75, category: 'cities' },
  { id: '18', name: 'Hammerfest', country: 'Norway', lat: 70.66, lng: 23.68, category: 'arctic' },
  { id: '19', name: 'Bodø', country: 'Norway', lat: 67.28, lng: 14.40, category: 'cities' },
  { id: '20', name: 'Harstad', country: 'Norway', lat: 68.80, lng: 16.54, category: 'cities' },
];

const imageCards: ImageCard[] = [
  { id: '1', title: 'Lofoten Winter', locationId: '1', imageUrl: 'https://cdn.prod.rexby.com/image/7d1ae366-da86-4bff-95dd-a0c12b5c160e?format=webp&width=256&height=320', category: 'mountains' },
  { id: '2', title: 'Geiranger Fjord', locationId: '2', imageUrl: 'https://cdn.prod.rexby.com/image/79f7722f-946c-4676-a746-7071caff82d9?format=webp&width=256&height=320', category: 'fjords' },
  { id: '3', title: 'Northern Lights', locationId: '3', imageUrl: 'https://cdn.prod.rexby.com/image/e5d98dda-0943-4ad9-b33c-ac41d1721742?format=webp&width=256&height=320', category: 'cities' },
  { id: '4', title: 'Bergen Harbor', locationId: '4', imageUrl: 'https://cdn.prod.rexby.com/image/bf78c0b2-474b-42bb-813c-3d554812e474?format=webp&width=256&height=320', category: 'cities' },
  { id: '5', title: 'Preikestolen Cliff', locationId: '5', imageUrl: 'https://cdn.prod.rexby.com/image/c2c3b8f2-2542-42bb-bd67-355cf1726aa9?format=webp&width=256&height=320', category: 'mountains' },
  { id: '6', title: 'Stockholm Old Town', locationId: '6', imageUrl: 'https://cdn.prod.rexby.com/image/0eb73fc4-23fe-400f-82e9-876972b90d3a?format=webp&width=256&height=320', category: 'cities' },
  { id: '7', title: 'Göteborg Coast', locationId: '7', imageUrl: 'https://cdn.prod.rexby.com/image/fd88e63f-f474-4619-a0a1-2144303657a6?format=webp&width=256&height=320', category: 'cities' },
  { id: '8', title: 'Helsinki Market', locationId: '8', imageUrl: 'https://cdn.prod.rexby.com/image/169b6eee-fc29-4258-87e3-02a28a0b3cd3?format=webp&width=256&height=320', category: 'cities' },
  { id: '9', title: 'Lapland Snow', locationId: '9', imageUrl: 'https://cdn.prod.rexby.com/image/039e1505-0104-4e48-9b35-3fc216d40c7b?format=webp&width=256&height=320', category: 'arctic' },
  { id: '10', title: 'Reykjavik Harbor', locationId: '10', imageUrl: 'https://cdn.prod.rexby.com/image/4a8e8781-d022-4041-8392-1b627f2811eb?format=webp&width=256&height=320', category: 'cities' },
];

// Image Card Component
const ImageCard: React.FC<{ card: ImageCard; location: Location }> = ({ card, location }) => {
  return (
    <div className="flex-shrink-0 w-40 h-[222px] p-1 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="w-full h-[180px] rounded-md overflow-hidden">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <p className="text-sm mt-2 text-center font-semibold text-gray-500">
        Preview
      </p>
    </div>
  );
};

// Main Component
const MapPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
  };

  // Load Leaflet CSS and JS
  useEffect(() => {
    const loadLeaflet = async () => {
      // Load CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(cssLink);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      script.onload = () => {
        setIsMapLoaded(true);
      };
      document.body.appendChild(script);
    };

    if (!(window as any).L) {
      loadLeaflet();
    } else {
      setIsMapLoaded(true);
    }
  }, []);

  return (
    <div className="w-screen h-screen min-h-screen min-w-full flex flex-col relative">
      <button
        className="absolute top-6 left-12 z-30 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-bold text-gray-700 hover:bg-gray-100 transition-colors border border-gray-200"
        onClick={() => navigate('/')}
        aria-label="Go Home"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Header */}
      <div className="mb-6 flex-1 flex flex-col">
        {/* Map */}
        <div className="flex-1 flex flex-col">
          {isMapLoaded ? (
            <LeafletMap locations={locations} onMarkerClick={handleMarkerClick} />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center flex-1">
              <div className="text-gray-500">Loading map...</div>
            </div>
          )}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="absolute left-0 right-0 bottom-0 z-20 px-4 py-2 pointer-events-none">
        <div className="rounded-xl shadow-2xl pointer-events-auto">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {imageCards.map(card => {
              const location = locations.find(loc => loc.id === card.locationId);
              return location ? (
                <ImageCard key={card.id} card={card} location={location} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;