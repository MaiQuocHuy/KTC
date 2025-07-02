import React from "react";

interface ScheduleDay {
  icon: string;
  day: string;
  time: string;
  selected?: boolean;
}

interface ScheduleCardProps {
  title: string;
  subtitle: string;
  days: ScheduleDay[];
  rightIcon?: React.ReactNode;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  title,
  subtitle,
  days,
  rightIcon,
  className = "",
  backgroundColor = "bg-white",
  rounded = false,
}: {
  title: string;
  subtitle: string;
  days: ScheduleDay[];
  rightIcon?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  rounded?: boolean;
}) => {
  return (
    <div
      className={`shadow-md w-full p-4 overflow-hidden ${rounded ? "rounded-full" : "rounded-lg"} ${backgroundColor} ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="ml-2">
          <h4 className="text-sm font-bold">{title}</h4>
          <span className="text-xs font-medium text-black">{subtitle}</span>
        </div>
        {rightIcon && <div>{rightIcon}</div>}
      </div>
      <div className="flex items-center justify-between gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-2 ${
              day.selected ? "bg-[#F6FBFF]" : ""
            }`}
          >
            <img
              src={day.icon}
              alt={`${day.day} schedule`}
              className="w-10 h-10 rounded-full  object-cover"
            />
            <span className="font-bold text-xs">{day.day}</span>
            <span className="text-[8px] text-gray-500">{day.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
