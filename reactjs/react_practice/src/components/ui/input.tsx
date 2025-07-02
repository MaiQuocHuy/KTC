import React from "react";

const Input = ({
  placeholder = "",
  className = "",
  fontWeight = "normal",
  iconLeft,
  iconRight,
}: {
  placeholder?: string;
  className?: string;
  fontWeight?: "normal" | "bold" | "semibold";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}) => {
  return (
    <div
      className={`p-2 py-1 border border-gray-300 rounded-2xl flex items-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300 w-xs max-w-md ${className}`}
    >
      {iconLeft && <div className="mr-2">{iconLeft}</div>}
      <input
        type="text"
        placeholder={placeholder}
        className={`p-2 border-none rounded-lg focus:outline-none w-full font-${fontWeight}`}
      />
      {iconRight && <div className="ml-2">{iconRight}</div>}
    </div>
  );
};

export default Input;
