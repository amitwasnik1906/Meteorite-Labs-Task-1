import React from 'react';
import { Instagram, Globe, AtSign, MessageCircle, Video } from 'lucide-react';

interface ProfileProps {
    name: string;
    business: string;
    joinDate: string;
    bio: string;
    profileImage: string;
    countries: string[];
    socialLinks?: {
        instagram?: string;
        tiktok?: string;
        website?: string;
        other?: string;
    };
}

const Profile: React.FC<ProfileProps> = ({
    name,
    business,
    joinDate,
    bio,
    profileImage,
    countries,
    socialLinks = {}
}) => {
    const handleMessage = () => {
        // Handle message functionality
        console.log('Message clicked');
    };

    const handleStorefront = () => {
        // Handle storefront functionality
        console.log('Storefront clicked');
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-8 md:py-16 px-4">
            {/* Left Profile Card */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 w-full md:w-96 h-fit mb-8 md:mb-0 mx-auto md:mx-0">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
                        <img
                            src={profileImage || "/placeholder.svg"}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Name and Business */}
                <div className="text-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{name}</h2>
                    <p className="text-blue-500 font-medium">{business}</p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center mb-6 gap-3">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                        <Instagram className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                        <Video className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                        <Globe className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                        <AtSign className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Country Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                    {countries.map((country, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
                        >
                            {country}
                        </span>
                    ))}
                </div>

                {/* Storefront Button */}
                <button
                    onClick={handleStorefront}
                    className="w-full bg-gray-900 text-white py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors"
                >
                    Storefront
                </button>
            </div>

            {/* Right Content */}
            <div className="flex-1 flex flex-col justify-center">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                        Guide by {name}
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg">{joinDate}</p>
                </div>

                {/* Bio */}
                <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{bio}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none">
                    <button
                        onClick={handleMessage}
                        className="px-6 sm:px-8 py-2 border-2 border-gray-600 text-gray-900 rounded-xl font-semibold hover:text-gray-500 transition-colors w-full sm:w-auto"
                    >
                        Message
                    </button>
                    <button
                        onClick={handleStorefront}
                        className="px-6 sm:px-8 py-2 border-2 border-gray-600 text-gray-900 rounded-xl font-semibold hover:text-gray-500 transition-colors w-full sm:w-auto"
                    >
                        Storefront
                    </button>
                </div>
            </div>
        </div>
    );
};

// Example usage
const ProfileExample = () => {
    const sampleProfile = {
        name: "Ása Steinars",
        business: "Travel Business",
        joinDate: "Joined in April 2022",
        bio: "Ása Steinars is an adventure photographer and videographer from Iceland. Growing up in the north, surrounded by extreme landscapes and forever changing weather has given her a tight bond to nature and its forces. This you can clearly see in her photography. She works as a full time content creator, helping people to travel Iceland like she does. She has a total following of almost 2 million across her social media platforms.",
        profileImage: "https://cdn.prod.rexby.com/image/90ca806e-c988-4993-8bcb-302fff6b27db?format=webp&width=112&height=112",
        countries: ["Iceland", "Norway"],
        socialLinks: {
            instagram: "https://instagram.com/asasteinars",
            tiktok: "https://tiktok.com/@asasteinars",
            website: "https://asasteinars.com"
        }
    };

    return <Profile {...sampleProfile} />;
};

export default ProfileExample;