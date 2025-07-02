import React from "react";

interface WeatherDay {
  icon: string;
  day: string;
  selected?: boolean;
}

interface WeatherForecastProps {
  days: WeatherDay[];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ days }) => {
  return (
    <div className={`shadow-md w-full p-4 overflow-hidden`}>
      <div className="flex items-center justify-between gap-4">
        {days.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-2 ${
              day.selected ? "bg-[#F6FBFF]" : ""
            }`}
          >
            <img
              src={day.icon}
              alt={`${day.day} weather`}
              className="w-10 h-10 rounded-full  border-gray-300"
            />
            <span className="font-bold text-xs">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
