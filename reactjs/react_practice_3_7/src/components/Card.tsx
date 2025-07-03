import React from "react";

interface CardProps {
  information: string;
  view: number;
}

const Card: React.FC<CardProps> = ({ information, view }) => {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-1/4">
      <div className="mb-3">
        <img
          src="https://picsum.photos/200/300"
          alt="random image"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="py-1 space-y-1">
        <p className="text-gray-800 text-sm leading-relaxed font-bold">
          {information}
        </p>
        <span className="text-yellow-500 text-sm">{view} lượt xem</span>
      </div>
    </div>
  );
};

export default Card;
