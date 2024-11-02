// components/GuideSection.tsx
import Image from "next/image";
// import Button from './Button'; // Assuming you have the Button component from earlier

interface GuideSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageHeight?: number;
  imageWidth?: number;
  imageUrl?: string;
  onButtonClick?: () => void;
  className?: string;
}

const GuideSection = ({
  title,
  description,
  buttonText,
  imageHeight = 126,
  imageWidth = 160,
  imageUrl,
  onButtonClick,
  className = "mt-20",
}: GuideSectionProps) => {
  return (
    <section className={className}>
      <div className="flex space-x-28 px-16">
        <div>
          <h3 className="text-[20px] font-semibold">{title}</h3>
          <p>{description}</p>
          <button
            className="py-3 px-6 border-2 rounded-lg"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
        <div>
          <Image
            src={imageUrl || ""} // Add a default placeholder image
            height={imageHeight}
            width={imageWidth}
            alt={title}
            className="bg-red-400 rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
