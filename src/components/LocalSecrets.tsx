import type React from "react"
import { Eye, Mountain } from "lucide-react"
import Slider from "./Slider"

interface ActivityCard {
    id: number
    image: string
    title: string
    type: "Sightseeing" | "Hike"
    icon: React.ReactNode
}

const CombinedSections: React.FC = () => {
    const activities: ActivityCard[] = [
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
    ]

    return (
        <div className="min-h-screen bg-white">
            <h2 className="text-4xl font-bold text-gray-900 my-12">Access My Local Secrets</h2>

            <div className="w-full max-w-6xl py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: 1/4 width */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 flex-shrink-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">161 things to do</h3>
                        <p className="text-gray-600 mb-4">
                            Get a curated list of all the best things to do with exact location, detailed info and inspiring content
                        </p>
                        <button className="text-gray-900 font-medium underline hover:no-underline">Preview</button>
                    </div>

                    {/* Right: 3/4 width */}
                    <div className="w-full md:w-3/4">
                        <div className="mb-8">
                            {/* Use the Slider component to show activities as a slider */}
                            <Slider images={activities} visibleCount={3}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-6xl py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: 1/4 width */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 flex-shrink-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">1 itinerary</h3>
                        <p className="text-gray-600 mb-4">
                            Get expertly curated itineraries that help you organise all the 'things to do' in an ideal time order
                        </p>
                        <button className="text-gray-900 font-medium underline hover:no-underline">Preview</button>
                    </div>

                    {/* Right: 3/4 width */}
                    <div className="w-full md:w-3/4">
                        <div className="mb-8">
                            {/* Use a placeholder for the itinerary preview, similar to the slider above */}
                            <div className="flex flex-row gap-6 justify-start">
                                {/* Map Preview */}
                                <div
                                    className="relative rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl z-10 flex-shrink-0"
                                    style={{ width: "280px", height: "360px" }}
                                >
                                    <img
                                        src="https://rexby-screenshot-service.netlify.app/itinerary/asasteinars/OJmyPXHfTJuOVTD_pOXxWQ"
                                        alt="Lofoten Road Trip Map"
                                        className="w-full h-full object-cover brightness-75"
                                    />

                                    <div className="absolute bottom-4 left-4">
                                        <div className=" backdrop-blur-sm rounded-lg px-3 py-2">
                                            <p className="text-white text-sm font-medium">Day 8</p>
                                            <p className="text-white text-lg font-semibold">Lofoten Road Trip</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Preview Placeholder */}
                                <div
                                    className="rounded-2xl border-2 border-gray-200 border-dashed flex items-center justify-center bg-gray-50 flex-shrink-0"
                                    style={{ width: "280px", height: "360px" }}
                                >
                                    <div className="text-center">
                                        <p className="text-gray-500 text-lg font-medium">Preview</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CombinedSections
