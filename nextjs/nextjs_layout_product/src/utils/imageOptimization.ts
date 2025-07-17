// Utility để tạo placeholder images với các kích thước và màu sắc khác nhau

export const generatePlaceholderDataURL = (
  width: number = 400,
  height: number = 400,
  backgroundColor: string = "#f3f4f6",
  textColor: string = "#9ca3af",
  text: string = "Loading..."
): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" 
            font-family="Arial, sans-serif" font-size="${
              Math.min(width, height) * 0.08
            }" 
            fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;

  const base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
};

// Tạo blur data URL cho Next.js Image
export const generateBlurDataURL = (): string => {
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
};

// Responsive image sizes cho Next.js
export const getResponsiveSizes = (
  type: "product" | "banner" | "thumbnail" | "avatar" = "product"
): string => {
  const sizeConfigs = {
    product:
      "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw",
    banner: "(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px",
    thumbnail: "(max-width: 640px) 25vw, (max-width: 768px) 20vw, 150px",
    avatar: "(max-width: 640px) 15vw, (max-width: 768px) 10vw, 80px",
  };

  return sizeConfigs[type];
};

// Tối ưu URL hình ảnh cho các CDN phổ biến
export const optimizeImageURL = (
  url: string,
  width?: number,
  height?: number,
  quality: number = 80,
  format: "webp" | "jpeg" | "png" = "webp"
): string => {
  // Nếu là local image, trả về nguyên bản
  if (url.startsWith("/") || url.startsWith("./")) {
    return url;
  }

  // Kiểm tra và tối ưu cho Cloudinary
  if (url.includes("cloudinary.com")) {
    const transformations = [];
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    transformations.push(`q_${quality}`);
    transformations.push(`f_${format}`);

    return url.replace("/upload/", `/upload/${transformations.join(",")}/`);
  }

  // Kiểm tra và tối ưu cho Unsplash
  if (url.includes("unsplash.com")) {
    const params = new URLSearchParams();
    if (width) params.set("w", width.toString());
    if (height) params.set("h", height.toString());
    params.set("q", quality.toString());
    params.set("fm", format);

    return `${url}?${params.toString()}`;
  }

  // Với các URL khác, chỉ trả về nguyên bản
  return url;
};

// Kiểm tra xem có phải là URL hình ảnh hợp lệ không
export const isValidImageURL = (url: string): boolean => {
  if (!url || typeof url !== "string") return false;

  // Kiểm tra các extension phổ biến
  const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)$/i;

  // Kiểm tra URL có extension hoặc có thể là URL từ CDN
  return (
    imageExtensions.test(url) ||
    url.includes("cloudinary.com") ||
    url.includes("unsplash.com") ||
    url.includes("pixabay.com") ||
    url.includes("pexels.com") ||
    url.startsWith("data:image/")
  );
};

// Tính toán kích thước aspect ratio
export const calculateAspectRatio = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number,
  maxHeight?: number
): { width: number; height: number } => {
  const aspectRatio = originalWidth / originalHeight;

  let newWidth = maxWidth;
  let newHeight = maxWidth / aspectRatio;

  if (maxHeight && newHeight > maxHeight) {
    newHeight = maxHeight;
    newWidth = maxHeight * aspectRatio;
  }

  return {
    width: Math.round(newWidth),
    height: Math.round(newHeight),
  };
};

// Preload critical images
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = async (
  sources: string[]
): Promise<HTMLImageElement[]> => {
  const promises = sources.map((src) => preloadImage(src));
  return Promise.allSettled(promises).then((results) =>
    results
      .filter(
        (result): result is PromiseFulfilledResult<HTMLImageElement> =>
          result.status === "fulfilled"
      )
      .map((result) => result.value)
  );
};
