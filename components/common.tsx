import cn from "@/utils/tw-merge";
import Image from "next/image";
import React from "react";

interface HeadingProps {
  title: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ title = "", className = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-6">
      <h1
        className={cn(
          "text-3xl sm:text-4xl font-semibold tracking-wide text-gray-800 dark:text-gray-100",
          className
        )}
      >
        {title}
      </h1>
      <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2" />
    </div>
  );
};

interface ImageSectionProps {
  src: string;
  alt?: string;
  className?: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt = "Image",
  className = "",
}) => {
  return (
    <div
      className={cn(
        "relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 96px, 128px"
      />
    </div>
  );
};

