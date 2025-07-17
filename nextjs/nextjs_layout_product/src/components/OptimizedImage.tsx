"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  useImageLazyLoad,
  useImagePreloader,
} from "@/hooks/useImageOptimization";
import {
  generateBlurDataURL,
  getResponsiveSizes,
  optimizeImageURL,
  isValidImageURL,
} from "@/utils/imageOptimization";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  className?: string;
  fallbackSrc?: string;
  onError?: () => void;
  lazy?: boolean;
  imageType?: "product" | "banner" | "thumbnail" | "avatar";
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  quality = 80,
  priority = false,
  className = "",
  fallbackSrc = "/images/placeholder.svg",
  onError,
  lazy = true,
  imageType = "product",
}) => {
  const [imageSrc, setImageSrc] = useState(() => {
    if (!isValidImageURL(src)) {
      return fallbackSrc;
    }
    return optimizeImageURL(src, width, height, quality);
  });
  const [isError, setIsError] = useState(false);

  // Lazy loading hook
  const { ref, isIntersecting } = useImageLazyLoad({
    rootMargin: "50px",
    threshold: 0.1,
  });

  // Preloader hook for better UX
  const { isLoaded } = useImagePreloader(isIntersecting ? imageSrc : "");

  const handleError = () => {
    if (!isError) {
      setImageSrc(fallbackSrc);
      setIsError(true);
      onError?.();
    }
  };

  const responsiveSizes = sizes || getResponsiveSizes(imageType);

  // Nếu lazy loading được bật và chưa intersecting, chỉ render placeholder
  if (lazy && !isIntersecting && !priority) {
    return (
      <div
        ref={ref}
        className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}
        style={fill ? {} : { width, height }}
      >
        <svg
          className="w-8 h-8 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  const imageProps = {
    src: imageSrc,
    alt,
    quality,
    priority,
    placeholder: "blur" as const,
    blurDataURL: generateBlurDataURL(),
    onError: handleError,
    className: `${className} transition-all duration-300 ${
      isLoaded ? "opacity-100" : "opacity-0"
    }`,
  };

  if (fill) {
    return (
      <div ref={ref}>
        <Image {...imageProps} fill sizes={responsiveSizes} />
      </div>
    );
  }

  return (
    <div ref={ref}>
      <Image
        {...imageProps}
        width={width}
        height={height}
        sizes={responsiveSizes}
      />
    </div>
  );
};

export default OptimizedImage;
