import React from "react";

const LocationCard = ({
  name,
  distance,
  image,
  rightIcon,
  backgroundColor = "bg-white",
  rightIconBackground = "bg-[#93D6BB]",
  className = "",
  rounded = false,
  center = false,
}: {
  name: string;
  distance: string;
  image: string;
  rightIcon?: string | React.ReactNode;
  rightIconBackground?: string;
  backgroundColor?: string;
  className?: string;
  rounded?: boolean;
  center?: boolean;
}) => {
  return (
    <div
      className={`shadow-md w-full p-4 overflow-hidden ${rounded ? "rounded-full" : "rounded-lg"} ${backgroundColor} ${className}`}
    >
      <div
        className={`flex ${center ? "items-center" : "items-start"} justify-between`}
      >
        {/* Left Section */}
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
          />
          <div className="ml-2">
            <h4 className="text-sm font-bold">{name}</h4>
            <span className="text-xs font-medium text-black">{distance}</span>
          </div>
        </div>
        {rightIcon && (
          <div
            className={`flex items-center justify-center w-8 h-8 ${rightIconBackground} rounded-full`}
          >
            {typeof rightIcon === "string" ? (
              <img src={rightIcon} alt="Right Icon" className="w-4 h-4" />
            ) : (
              rightIcon
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
