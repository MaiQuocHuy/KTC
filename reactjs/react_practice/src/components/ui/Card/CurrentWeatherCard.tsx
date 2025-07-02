import React from "react";

const CurrentWeatherCard = ({
  city,
  condition,
  temperature,
  icon,
  className = "",
  backgroundColor = "linear-gradient(to right, #FF512F 0%, #DD2476 100%)",
  rounded = false,
}: {
  city: string;
  condition: string;
  temperature: string;
  icon: string;
  className?: string;
  backgroundColor?: string;
  rounded?: boolean;
}) => {
  return (
    <div
      className={`shadow-md w-full p-4 overflow-hidden ${rounded ? "rounded-full" : "rounded-lg"} ${className}`}
      style={{ background: backgroundColor }}
    >
      <div className="flex items-center justify-between">
        <div className="ml-2">
          <h4 className="text-sm font-bold text-white">{city}</h4>
          <span className="text-xs font-medium text-white">{condition}</span>
        </div>
        <span className="text-3xl font-bold text-white">{temperature}</span>
        <img
          src={icon}
          alt="Weather Icon"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
