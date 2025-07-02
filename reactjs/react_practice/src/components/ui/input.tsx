import React from "react";
import {
  AiFillPhone,
  AiOutlineFunnelPlot,
  AiOutlineNodeExpand,
  AiOutlineSearch,
  AiTwotoneInfoCircle,
} from "react-icons/ai";

const Input = ({
  placeholder = "",
  className = "",
  text = "",
  outlineFunnelIcon = false,
  outlineNodeIcon = false,
  outlinePhoneIcon = false,
  font = "",
  searchIcon = false,
  infoCircleIcon = false,
}: {
  placeholder?: string;
  className?: string;
  text?: string;
  font?: string;
  outlineFunnelIcon?: boolean;
  outlineNodeIcon?: boolean;
  outlinePhoneIcon?: boolean;
  searchIcon?: boolean;
  infoCircleIcon?: boolean;
}) => {
  return (
    <div
      className={`p-2 py-1 border border-gray-300 rounded-2xl flex items-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300 w-xs max-w-md ${className && className}`}
    >
      <div className={`${!searchIcon && "hidden"}`}>
        <AiOutlineSearch className="text-xl" />
      </div>
      <input
        type="text"
        placeholder={placeholder && placeholder}
        className={`p-2 border-none rounded-lg focus:outline-none w-full ${font && `font-${font}`}`}
        value={text}
      />

      <div className={`${!outlineFunnelIcon && "hidden"}  rounded-lg p-2`}>
        <AiOutlineFunnelPlot className="text-sm" />
      </div>
      <div className={`${!outlineNodeIcon && "hidden"} rounded-lg p-2`}>
        <AiOutlineNodeExpand className="text-sm" />
      </div>

      <div
        className={`${!outlinePhoneIcon && "hidden"} bg-green-200 rounded-lg p-2`}
      >
        <AiFillPhone className="text-sm" />
      </div>
      <div
        className={`${!infoCircleIcon && "hidden"} bg-yellow-200 rounded-full p-2`}
      >
        <AiTwotoneInfoCircle className="text-sm" />
      </div>
    </div>
  );
};

export default Input;
