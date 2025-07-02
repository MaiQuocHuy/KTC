import React from "react";

const TransactionCard = ({
  name,
  logo,
  category,
  amount,
  time,
  className = "",
  backgroundColor = "bg-white",
  rounded = false,
}: {
  name: string;
  logo: string;
  category: string;
  amount: string;
  time: string;
  className?: string;
  backgroundColor?: string;
  rounded?: boolean;
}) => {
  return (
    <div
      className={`shadow-md w-full p-4 overflow-hidden ${rounded ? "rounded-full" : "rounded-lg"} ${backgroundColor} ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt={`${name} Logo`}
            className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
          />
          <div className="ml-2">
            <h4 className="text-sm font-bold">{name}</h4>
            <span className="text-xs font-medium text-gray-400">
              {category}
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm font-bold text-black block">{amount}</span>
          <span className="text-xs font-medium text-gray-400">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
