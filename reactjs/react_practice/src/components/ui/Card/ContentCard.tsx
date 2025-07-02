import React from "react";

const ContactCard = ({
  name,
  avatar,
  icon,
  backgroundColor = "bg-white",
  className = "",
  rounded = false,
  center = false,
}: {
  name: string;
  avatar: string;
  icon: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  rounded?: boolean;
  center?: boolean;
}) => {
  return (
    <div
      className={`shadow-md w-full ${center ? "p-0" : "p-4"} overflow-hidden ${rounded ? "rounded-full" : "rounded-lg"} ${backgroundColor} ${className}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={`${name} Avatar`}
            className="w-20 h-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold">{name}</h4>
          </div>
        </div>
        <div className="mr-4">{icon}</div>
      </div>
    </div>
  );
};

export default ContactCard;
