"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample banner data - in a real app, this would come from an API
  const banners = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      subtitle: "Giá từ 29.990.000đ",
      image: "/api/placeholder/800/400",
      bgColor: "bg-gradient-to-r from-blue-900 to-purple-900",
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra",
      subtitle: "Ưu đãi đặc biệt",
      image: "/api/placeholder/800/400",
      bgColor: "bg-gradient-to-r from-gray-900 to-blue-900",
    },
    {
      id: 3,
      title: "MacBook Air M3",
      subtitle: "Mới ra mắt",
      image: "/api/placeholder/800/400",
      bgColor: "bg-gradient-to-r from-purple-900 to-pink-900",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[400px] overflow-hidden">
      {/* Main banner slides */}
      <div className="relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } ${banner.bgColor}`}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="text-white z-10">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-200">
                    {banner.subtitle}
                  </p>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Xem ngay
                  </button>
                </div>
                <div className="hidden md:block">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="text-white/60 text-center">
                      <div className="text-6xl mb-2">📱</div>
                      <p>Product Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
