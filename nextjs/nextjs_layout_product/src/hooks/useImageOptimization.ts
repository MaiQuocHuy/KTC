import { useState, useEffect, useRef } from "react";

interface UseImageLazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
}

export const useImageLazyLoad = (options: UseImageLazyLoadOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  const { rootMargin = "50px", threshold = 0.1 } = options;

  useEffect(() => {
    const element = imgRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true);
          setHasLoaded(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [rootMargin, threshold, hasLoaded]);

  return {
    ref: imgRef,
    isIntersecting: isIntersecting || hasLoaded,
    hasLoaded,
  };
};

// Hook để preload hình ảnh
export const useImagePreloader = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();

    img.onload = () => {
      setIsLoaded(true);
      setError(null);
    };

    img.onerror = () => {
      setError("Failed to load image");
      setIsLoaded(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoaded, error };
};

// Hook để quản lý multiple images
export const useImagesPreloader = (sources: string[]) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    if (sources.length === 0) {
      setIsAllLoaded(true);
      return;
    }

    let loadedImages = 0;
    const imageElements: HTMLImageElement[] = [];

    sources.forEach((src) => {
      const img = new Image();
      imageElements.push(img);

      img.onload = () => {
        loadedImages++;
        setLoadedCount(loadedImages);

        if (loadedImages === sources.length) {
          setIsAllLoaded(true);
        }
      };

      img.onerror = () => {
        loadedImages++;
        setLoadedCount(loadedImages);

        if (loadedImages === sources.length) {
          setIsAllLoaded(true);
        }
      };

      img.src = src;
    });

    return () => {
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [sources]);

  return {
    loadedCount,
    isAllLoaded,
    progress: sources.length > 0 ? (loadedCount / sources.length) * 100 : 100,
  };
};
