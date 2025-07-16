import React from 'react';
import { ChevronRight, Eye, Mountain } from 'lucide-react';
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
      image: "https://cdn.prod.rexby.com/image/7d1ae366-da86-4bff-95dd-a0c12b5c160e?format=webp&width=384&height=480",
      title: "One of my favourite spots",
      type: "Sightseeing",
      icon: <Eye className="w-4 h-4" />,
    },
    {
      id: 2,
      image: "https://cdn.prod.rexby.com/image/79f7722f-946c-4676-a746-7071caff82d9?format=webp&width=384&height=480",
      title: "Swing with amazing views",
      type: "Sightseeing",
      icon: <Eye className="w-4 h-4" />,
    },
    {
      id: 3,
      image: "https://cdn.prod.rexby.com/image/7d1ae366-da86-4bff-95dd-a0c12b5c160e?format=webp&width=384&height=480",
      title: "Beautiful view point",
      type: "Hike",
      icon: <Mountain className="w-4 h-4" />,
    },
    {
      id: 4,
      image: "https://cdn.prod.rexby.com/image/7d1ae366-da86-4bff-95dd-a0c12b5c160e?format=webp&width=384&height=480",
      title: "Beautiful view point",
      type: "Hike",
      icon: <Mountain className="w-4 h-4" />,
    },
    {
      id: 5,
      image: "https://cdn.prod.rexby.com/image/79f7722f-946c-4676-a746-7071caff82d9?format=webp&width=384&height=480",
      title: "Swing with amazing views",
      type: "Sightseeing",
      icon: <Eye className="w-4 h-4" />,
    },
    {
      id: 6,
      image: "https://cdn.prod.rexby.com/image/7d1ae366-da86-4bff-95dd-a0c12b5c160e?format=webp&width=384&height=480",
      title: "Beautiful view point",
      type: "Hike",
      icon: <Mountain className="w-4 h-4" />,
    },
    {
      id: 7,
      image: "https://cdn.prod.rexby.com/image/7d1ae366-da86-4bff-95dd-a0c12b5c160e?format=webp&width=384&height=480",
      title: "Beautiful view point",
      type: "Hike",
      icon: <Mountain className="w-4 h-4" />,
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
