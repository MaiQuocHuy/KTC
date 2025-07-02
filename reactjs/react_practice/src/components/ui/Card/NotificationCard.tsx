import React from "react";

const NotificationCard = ({
  message,
  icon,
  count,
  backgroundColor = "bg-white",
  className = "",
  rounded = false,
}: {
  message: string;
  icon: React.ReactNode;
  count: number;
  backgroundColor?: string;
  className?: string;
  rounded?: boolean;
}) => {
  return (
    <div
      className={`shadow-md w-full p-4 overflow-hidden ${rounded ? "rounded-full" : "rounded-lg"} ${backgroundColor} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="block mr-2 font-bold text-sm">{message}</span>
        <div className="flex items-center space-x-2 pl-4 border-l-2 border-gray-300">
          {icon}
          <span className="text-sm font-bold text-white px-4 py-1 bg-black rounded-3xl">
            {count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
