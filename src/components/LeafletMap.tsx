import React, { useRef, useEffect } from 'react';

interface Location {
    id: string;
    name: string;
    country: string;
    lat: number;
    lng: number;
    locked?: boolean;
    category: string;
}

// Map Component with Leaflet (Full Page Size)
const LeafletMap: React.FC<{ locations: Location[]; onMarkerClick: (location: Location) => void }> = ({ locations, onMarkerClick }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const markersRef = useRef<any[]>([]);

    useEffect(() => {
        if (!mapRef.current) return;

        // Initialize Leaflet map
        const L = (window as any).L;
        if (!L) return;

        // Create map centered on Norway
        const map = L.map(mapRef.current).setView([65.0, 15.0], 5);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18,
        }).addTo(map);

        mapInstanceRef.current = map;

        // Create custom icon for regular markers
        const customIcon = L.divIcon({
            html: `
          <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
          </div>
        `,
            className: 'custom-marker',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
        });

        // Create custom icon for locked markers
        const lockedIcon = L.divIcon({
            html: `
          <div class="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
        `,
            className: 'custom-marker locked',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
        });

        // Add markers
        locations.forEach(location => {
            const marker = L.marker([location.lat, location.lng], {
                icon: location.locked ? lockedIcon : customIcon
            }).addTo(map);

            marker.bindTooltip(location.name, {
                permanent: false,
                direction: 'top',
                className: 'custom-tooltip'
            });

            marker.on('click', () => {
                onMarkerClick(location);
            });

            markersRef.current.push(marker);
        });

        // Cleanup function
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
            }
        };
    }, [locations, onMarkerClick]);

    // Make the map take the full viewport
    return (
        <div
            className="fixed inset-0 z-0"
            style={{
                width: '100vw',
                height: '100vh',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                position: 'fixed',
                zIndex: 0,
            }}
        >
            <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

            {/* Custom styles for map */}
            <style>{`
          .custom-marker {
            background: transparent !important;
            border: none !important;
          }
          
          .custom-tooltip {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            border: none;
            border-radius: 4px;
            padding: 4px 8px;
            font-size: 12px;
            font-weight: 500;
          }
          
          .custom-tooltip::before {
            border-top-color: rgba(0, 0, 0, 0.8) !important;
          }
        `}</style>
        </div>
    );
};

export default LeafletMap