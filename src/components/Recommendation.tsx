import React from 'react';
import { Eye, Mountain } from 'lucide-react';
import Slider from './Slider';

interface RecommendationCard {
  id: number
  image: string
  title: string
  type: "Sightseeing" | "Hike"
  icon: React.ReactNode
}

const RecommendationGrid: React.FC = () => {
  const recommendations: RecommendationCard[] = [
    {
      id: 1,
      image: "https://cdn.prod.rexby.com/image/1de6ae3f-c2a8-4edd-9cee-2379f16479bb?format=webp&width=640&height=800",
      title: "Iceland Guide",
      type: "Sightseeing",
      icon: <Eye className="w-4 h-4" />,
    },
    {
      id: 2,
      image: "https://cdn.prod.rexby.com/image/f14b8c8b91614c269b2c9a2c0a12f181?format=webp&width=640&height=800",
      title: "Explore Lithuania",
      type: "Sightseeing",
      icon: <Eye className="w-4 h-4" />,
    },
    {
      id: 3,
      image: "https://cdn.prod.rexby.com/image/755300c1f34148ad883f8487373888d3?format=webp&width=640&height=800",
      title: "Ultimate Guide to New Zealand",
      type: "Hike",
      icon: <Mountain className="w-4 h-4" />,
    },
    {
      id: 4,
      image: "https://cdn.prod.rexby.com/image/0a35490d51154b9881e2b104ddc6f116?format=webp&width=640&height=800",
      title: "Exploring Ireland's Hidden Gems",
      type: "Hike",
      icon: <Mountain className="w-4 h-4" />,
    },
    {
      id: 5,
      image: "https://cdn.prod.rexby.com/image/e6b4d438-431c-4d77-b76f-000c17c4beb1?format=webp&width=640&height=800",
      title: "Faroe Islands Guide",
      type: "Sightseeing",
      icon: <Eye className="w-4 h-4" />,
    },
  ];

  return (
    <div className="max-w-7xl py-3 mx-auto px-4 md:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left">You may also like</h2>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <Slider images={recommendations} visibleCount={4} />
        </div>
      </div>
    </div>
  );
};

export default RecommendationGrid;
