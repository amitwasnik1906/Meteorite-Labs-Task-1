"use client"

import type React from "react"
import { useState } from "react"

interface SliderImage {
  id: number
  image: string
  title: string
  type: string
  icon: React.ReactNode
  author?: string
  location?: string
  authorImage?: string
}

interface SliderProps {
  images: SliderImage[]
  visibleCount?: number
}

const Slider: React.FC<SliderProps> = ({ images, visibleCount = 3 }) => {
  const [current, setCurrent] = useState(0)

  if (images.length === 0) return null

  // Calculate the indices of the images to show, wrapping around if needed
  const getVisibleImages = () => {
    const visible: SliderImage[] = []
    for (let i = 0; i < visibleCount; i++) {
      visible.push(images[(current + i) % images.length])
    }
    return visible
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const visibleImages = getVisibleImages()

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex relative w-full max-w-5xl mx-auto flex-row items-center justify-center">
        <button
          onClick={prevSlide}
          aria-label="Previous"
          style={{ zIndex: 20 }}
          className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors hidden md:inline-flex"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-4 justify-center items-center">
          {visibleImages.map((img) => (
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
                <img src={img.image || "/placeholder.svg"} alt={img.title} className="w-full h-full object-cover" />
                {img.authorImage && (
                  <div className="absolute bottom-3 left-3">
                    <img
                      src={img.authorImage || "/placeholder.svg"}
                      alt={img.author}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                )}
              </div>
              <div className="mt-4 px-2">
                <div className="flex items-center gap-2 mb-2">
                  {img.icon}
                  <span className="text-gray-600 text-sm font-medium">{img.type}</span>
                </div>
                <h4 className="text-gray-900 font-bold leading-tight">{img.title}</h4>
                {img.location && img.author && (
                  <p className="text-gray-500 text-sm mt-1">
                    {img.location} • by {img.author}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next"
          style={{ zIndex: 20 }}
          className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors hidden md:inline-flex"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative w-full">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2">
          {images.map((img) => (
            <div
              key={img.id}
              className="flex-shrink-0"
              style={{
                width: "171px",
              }}
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg"
                style={{
                  width: "171px",
                  height: "214px",
                }}
              >
                <img src={img.image || "/placeholder.svg"} alt={img.title} className="w-full h-full object-cover" />
                {img.authorImage && (
                  <div className="absolute bottom-3 left-3">
                    <img
                      src={img.authorImage || "/placeholder.svg"}
                      alt={img.author}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                )}
              </div>
              <div className="mt-3 px-1">
                <h4 className="text-gray-900 font-bold text-base leading-tight mb-1">{img.title}</h4>
                {img.location && img.author && (
                  <p className="text-gray-500 text-sm">
                    {img.location} • by {img.author}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Slider
