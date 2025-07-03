import React from "react";

interface ColorItemProps {
  color: string;
  isSelected: boolean;
  onSelect: (color: string) => void;
}

const ColorItem: React.FC<ColorItemProps> = ({
  color,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`border-4 px-2 py-1 rounded-xs relative cursor-pointer ${
        isSelected ? "border-orange-500" : "border-gray-300"
      }`}
      onClick={() => onSelect(color)}
    >
      <span
        className={`text-sm px-2 block font-semibold ${
          isSelected ? "text-orange-500" : "text-gray-500"
        }`}
      >
        {color}
      </span>
      {/* Tam giác ở góc dưới bên phải */}
      <div
        className={`absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent ${
          isSelected ? "border-orange-500" : "border-transparent"
        }`}
      />
      {/* Icon check */}
      {isSelected && (
        <div className="absolute bottom-0 right-0 text-white text-xs p-[1px] pr-[2px] rounded-xs">
          ✓
        </div>
      )}
    </div>
  );
};

export default ColorItem;
