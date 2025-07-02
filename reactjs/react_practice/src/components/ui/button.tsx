import React from "react";

type ButtonProps = {
  text: string;
  iconSrc?: string;
  showArrow?: boolean;
  className?: string;
};

const Button = ({
  text,
  iconSrc,
  showArrow = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-between gap-3 px-4 py-2 rounded-lg transition-colors duration-300 w-xs max-w-md ${className}`}
    >
      {iconSrc && <img src={iconSrc} alt="icon" className="w-5 h-5 mr-2" />}
      <span className="flex-1 text-left">{text}</span>
      {showArrow && (
        <img
          src="/logos/arrow_right.svg"
          alt="arrow"
          className="w-4 h-4 ml-2"
        />
      )}
    </button>
  );
};

export default Button;
