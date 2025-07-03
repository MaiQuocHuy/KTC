import React from "react";

interface RatingItemProps {
  rating: number;
}

const RatingItem: React.FC<RatingItemProps> = ({ rating }) => {
  return (
    <div className="space-x-2">
      {/* 5 star display star with color is yellow(active) and gray(inactive)*/}
      <div className="inline-block">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`text-yellow-500 ${
              index < rating ? "text-yellow-500" : "text-gray-500"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <span className="bg-green-500 px-2 py-1 rounded-sm text-xs text-white">
        Bình thường
      </span>
    </div>
  );
};

export default RatingItem;
