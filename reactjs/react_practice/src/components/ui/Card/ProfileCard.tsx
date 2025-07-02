import React from "react";

const ProfileCard = ({
  name,
  avatar,
  subtitle,
  rightContent,
  backgroundColor = "bg-white",
  textColor = "text-black",
  rounded = false,
  className = "",
}: {
  name: string;
  avatar: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  rounded?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`shadow-md w-full p-4 overflow-hidden ${rounded ? "rounded-full" : "rounded-lg"} ${backgroundColor} ${className}`}
    >
      {" "}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={`${name} Avatar`}
            className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
          />
          <div className="ml-2">
            <h4 className={`text-sm font-bold ${textColor}`}>{name}</h4>
            {subtitle && (
              <span className="text-xs font-medium text-gray-400">
                {subtitle}
              </span>
            )}
          </div>
        </div>
        {rightContent && <div>{rightContent}</div>}
      </div>
    </div>
  );
};

export default ProfileCard;
