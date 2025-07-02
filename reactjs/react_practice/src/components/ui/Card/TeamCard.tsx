import React from "react";

interface TeamMember {
  avatar: string;
  name: string;
}

const TeamCard = ({
  members,
  title,
  subtitle,
  backgroundColor = "bg-white",
  textColor = "text-white",
  className = "",
  rounded = false,
}: {
  members: TeamMember[];
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  rounded?: boolean;
}) => {
  return (
    <div
      className={`shadow-md w-full p-4 overflow-hidden ${rounded ? "rounded-full" : "rounded-lg"} ${backgroundColor} ${className}`}
    >
      <div className="flex items-center">
        <div className="flex items-center space-x-0">
          {members.map((member, index) => (
            <img
              key={index}
              src={member.avatar}
              className={`w-14 h-14 rounded-full border-2 border-white ${
                index > 0 ? "-ml-3" : ""
              }`}
              alt={member.name}
            />
          ))}
        </div>
        <div className="mx-auto text-center">
          <h4 className={`font-bold text-xl ${textColor}`}>{title}</h4>
          {subtitle && (
            <span className={`text-xs ${textColor}`}>{subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
