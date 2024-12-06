"use client";
import Image from "next/image";

interface GuideSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string; // Added button link prop
  imageHeight?: number;
  imageWidth?: number;
  imageUrl?: string;
  className?: string;
}

const GuideSection = ({
  title,
  description,
  buttonText,
  buttonLink = "#", // Default to a placeholder link
  imageHeight = 126,
  imageWidth = 160,
  imageUrl = "/placeholder.png", // Default placeholder image
  className = "mt-20",
}: GuideSectionProps) => {
  return (
    <section
      className={`${className} transition-all duration-300 hover:transform hover:scale-105`}
    >
      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-28 px-4 md:px-8 lg:px-16 items-center md:items-start">
        {/* Content Section */}
        <div className="flex flex-col space-y-4 mb-6 md:mb-0">
          <h3 className="text-xl md:text-[20px] font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-gray-600 max-w-md">{description}</p>
          <a
            href={buttonLink}
            className="inline-flex items-center w-fit py-3 px-6 ml-4 border-2 border-purple-500 
                       rounded-lg text-purple-700 font-medium transition-all duration-300
                       hover:bg-purple-500 hover:text-white focus:outline-none 
                       focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            {buttonText}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            {/* <Image
              src={imageUrl}
              height={imageHeight}
              width={imageWidth}
              alt={title}
              className="object-cover transition-transform duration-300 hover:scale-110"
              // onError={(e) => {
              //   const target = e.target as HTMLImageElement;
              //   // target.src = "/placeholder.png"; // Fallback image
              // }}
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
