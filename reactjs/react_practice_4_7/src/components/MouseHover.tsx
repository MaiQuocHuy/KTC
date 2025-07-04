import React from "react";

const MouseHover: React.FC<{
  handleMouseLeave: () => void;
  handleMouseEnter: () => void;
  isHovered: boolean;
}> = ({ handleMouseLeave, handleMouseEnter, isHovered }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md">
      <div
        className={`w-30 h-30 ${isHovered ? "bg-green-400" : "bg-yellow-400"}`}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {isHovered ? "Hover" : "Not Hover"}
      </div>
    </section>
  );
};

export default MouseHover;
