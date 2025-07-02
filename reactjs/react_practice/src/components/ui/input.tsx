import React from "react";

type InputProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  fontWeight?: "normal" | "bold" | "semibold";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

const Input = ({
  placeholder = "",
  className = "",
  value = "",
  fontWeight = "normal",
  iconLeft,
  iconRight,
}: InputProps) => {
  return (
    <div
      className={`p-2 py-1 border border-gray-300 rounded-2xl flex items-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300 w-xs max-w-md ${className}`}
    >
      {iconLeft && <div className="mr-2">{iconLeft}</div>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={`p-2 border-none rounded-lg focus:outline-none w-full font-${fontWeight}`}
      />
      {iconRight && <div className="ml-2">{iconRight}</div>}
    </div>
  );
};

export default Input;
