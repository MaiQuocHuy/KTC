# Tối ưu hình ảnh trong Next.js

## Tổng quan

Dự án này đã được tối ưu hóa để xử lý hình ảnh một cách hiệu quả nhất với Next.js. Các tính năng được triển khai bao gồm:

## 🚀 Tính năng đã triển khai

### 1. Component OptimizedImage

- **Lazy Loading**: Tự động lazy load hình ảnh khi scroll
- **Responsive Images**: Tự động điều chỉnh kích thước theo thiết bị
- **WebP Support**: Tự động chuyển đổi sang định dạng WebP
- **Blur Placeholder**: Hiển thị placeholder blur khi đang load
- **Error Handling**: Tự động fallback khi lỗi load hình ảnh
- **CDN Optimization**: Tối ưu URL cho các CDN phổ biến

### 2. Hooks tối ưu

- **useImageLazyLoad**: Hook cho lazy loading với Intersection Observer
- **useImagePreloader**: Hook để preload hình ảnh
- **useImagesPreloader**: Hook để preload nhiều hình ảnh cùng lúc

### 3. Utilities

- **generatePlaceholderDataURL**: Tạo placeholder động
- **optimizeImageURL**: Tối ưu URL cho Cloudinary, Unsplash
- **getResponsiveSizes**: Tạo responsive sizes cho các loại hình ảnh
- **preloadImage/preloadImages**: Preload hình ảnh critical

## 📁 Cấu trúc file

```
src/
├── components/
│   ├── OptimizedImage.tsx     # Component chính cho hình ảnh
│   └── ProductList.tsx        # Sử dụng OptimizedImage
├── hooks/
│   └── useImageOptimization.ts # Hooks cho tối ưu hình ảnh
├── utils/
│   └── imageOptimization.ts   # Utilities tối ưu hình ảnh
└── public/
    └── images/
        └── placeholder.svg    # Placeholder mặc định
```

## 🛠️ Cách sử dụng

### Sử dụng OptimizedImage Component

```tsx
import OptimizedImage from '@/components/OptimizedImage';

// Sử dụng cơ bản
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Mô tả hình ảnh"
  width={400}
  height={300}
/>

// Sử dụng với fill
<div className="relative aspect-square">
  <OptimizedImage
    src="/path/to/image.jpg"
    alt="Mô tả hình ảnh"
    fill
    imageType="product"
    priority={true} // Ưu tiên load
  />
</div>

// Sử dụng với lazy loading
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Mô tả hình ảnh"
  width={400}
  height={300}
  lazy={true}
  quality={90}
/>
```

### Props của OptimizedImage

| Prop          | Type                                               | Mặc định                  | Mô tả                   |
| ------------- | -------------------------------------------------- | ------------------------- | ----------------------- |
| `src`         | `string`                                           | -                         | URL hình ảnh (bắt buộc) |
| `alt`         | `string`                                           | -                         | Alt text (bắt buộc)     |
| `width`       | `number`                                           | -                         | Chiều rộng              |
| `height`      | `number`                                           | -                         | Chiều cao               |
| `fill`        | `boolean`                                          | `false`                   | Fill toàn bộ container  |
| `sizes`       | `string`                                           | auto                      | Responsive sizes        |
| `quality`     | `number`                                           | `80`                      | Chất lượng hình ảnh     |
| `priority`    | `boolean`                                          | `false`                   | Ưu tiên load            |
| `lazy`        | `boolean`                                          | `true`                    | Lazy loading            |
| `imageType`   | `'product' \| 'banner' \| 'thumbnail' \| 'avatar'` | `'product'`               | Loại hình ảnh           |
| `fallbackSrc` | `string`                                           | `/images/placeholder.svg` | Fallback khi lỗi        |

### Sử dụng Hooks

```tsx
import {
  useImageLazyLoad,
  useImagePreloader,
} from "@/hooks/useImageOptimization";

// Lazy loading hook
const { ref, isIntersecting } = useImageLazyLoad({
  rootMargin: "50px",
  threshold: 0.1,
});

// Preloader hook
const { isLoaded, error } = useImagePreloader("/path/to/image.jpg");
```

### Sử dụng Utilities

```tsx
import {
  optimizeImageURL,
  getResponsiveSizes,
  preloadImages,
} from "@/utils/imageOptimization";

// Tối ưu URL Cloudinary
const optimizedUrl = optimizeImageURL(
  "https://res.cloudinary.com/demo/image/upload/sample.jpg",
  400,
  300,
  80,
  "webp"
);

// Lấy responsive sizes
const sizes = getResponsiveSizes("product");

// Preload nhiều hình ảnh
await preloadImages(["/image1.jpg", "/image2.jpg", "/image3.jpg"]);
```

## ⚙️ Cấu hình Next.js

File `next.config.ts` đã được cấu hình với:

```typescript
const nextConfig: NextConfig = {
  images: {
    // Cho phép load từ mọi domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    // Responsive breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Định dạng ưu tiên
    formats: ["image/webp"],
    // Cache 24 giờ
    minimumCacheTTL: 86400,
    // Hỗ trợ SVG
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```

## 🎯 Lợi ích

1. **Hiệu suất**: Giảm thời gian load trang với lazy loading
2. **Responsive**: Tự động điều chỉnh theo kích thước màn hình
3. **SEO**: Tối ưu cho Core Web Vitals
4. **UX**: Placeholder và transition mượt mà
5. **Bandwidth**: Tiết kiệm băng thông với WebP và responsive
6. **Error Handling**: Xử lý lỗi graceful với fallback

## 🔧 Tùy chỉnh

### Thêm CDN mới

Trong `utils/imageOptimization.ts`, thêm logic cho CDN mới:

```typescript
export const optimizeImageURL = (url: string, ...) => {
  // Thêm logic cho CDN mới
  if (url.includes('your-cdn.com')) {
    // Logic tối ưu cho CDN của bạn
  }

  return url;
};
```

### Tùy chỉnh responsive sizes

```typescript
const customSizes = {
  hero: "(max-width: 768px) 100vw, 1920px",
  gallery: "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px",
};
```

## 📈 Monitoring

Để theo dõi hiệu suất hình ảnh:

1. Sử dụng Chrome DevTools Network tab
2. Kiểm tra Core Web Vitals
3. Sử dụng Lighthouse để audit
4. Monitor LCP (Largest Contentful Paint)

## 🚨 Lưu ý

1. **Priority**: Chỉ set `priority={true}` cho hình ảnh above-the-fold
2. **Quality**: Điều chỉnh quality theo nhu cầu (80-90 cho product, 60-70 cho thumbnail)
3. **Fallback**: Luôn cung cấp fallback image
4. **Alt text**: Luôn cung cấp alt text đầy đủ cho accessibility
