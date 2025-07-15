import React, { useState } from "react";

interface SliderImage {
    id: number;
    image: string;
    title: string;
    type: string;
    icon: React.ReactNode;
}

interface SliderProps {
    images: SliderImage[];
    visibleCount?: number;
}

const Slider: React.FC<SliderProps> = ({ images, visibleCount = 3 }) => {
    const [current, setCurrent] = useState(0);

    if (images.length === 0) return null;

    // Calculate the indices of the images to show, wrapping around if needed
    const getVisibleImages = () => {
        const visible: SliderImage[] = [];
        for (let i = 0; i < visibleCount; i++) {
            visible.push(images[(current + i) % images.length]);
        }
        return visible;
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const visibleImages = getVisibleImages();

    return (
        <div className="relative w-full max-w-5xl mx-auto flex flex-row items-center justify-center">
            <button
                onClick={prevSlide}
                aria-label="Previous"
                style={{ zIndex: 20 }}
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="flex gap-4 justify-center items-center">
                {visibleImages.map((img, idx) => (
                    <div
                        key={img.id}
                        className=""
                        style={{
                            width: "280px",
                        }}
                    >
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                                width: "280px",
                                height: "360px",
                            }}
                        >
                            <img
                                src={img.image || "/placeholder.svg"}
                                alt={img.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-4 px-2">
                            <div className="flex items-center gap-2 mb-2">
                                {img.icon}
                                <span className="text-gray-600 text-sm font-medium">{img.type}</span>
                            </div>
                            <h4 className="text-gray-900 font-semibold text-lg leading-tight">{img.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={nextSlide}
                aria-label="Next"
                style={{ zIndex: 20 }}
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default Slider;
