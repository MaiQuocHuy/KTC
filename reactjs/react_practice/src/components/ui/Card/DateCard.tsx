import React from "react";

const DateCard = ({
  month,
  day,
  dayName,
  timeRange,
  className = "",
  backgroundColor = "bg-white",
  rounded = false,
}: {
  month: string;
  day: string;
  dayName: string;
  timeRange: string;
  className?: string;
  backgroundColor?: string;
  rounded?: boolean;
}) => {
  return (
    <div
      className={`shadow-md w-full p-4 overflow-hidden ${rounded ? "rounded-full" : "rounded-lg"} ${backgroundColor} ${className}`}
    >
      {" "}
      <div className="flex items-center">
        <div className="border-r-2 border-gray-300 pr-10">
          <span className="font-bold text-sm block">{month}</span>
          <span className="text-sm font-bold text-red-600">{day}</span>
        </div>
        <div className="ml-18">
          <span className="block">{dayName}</span>
          <span className="text-xs text-gray-500">{timeRange}</span>
        </div>
      </div>
    </div>
  );
};

export default DateCard;
