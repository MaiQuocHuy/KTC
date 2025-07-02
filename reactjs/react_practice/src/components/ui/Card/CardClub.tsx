import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

type Props = {
  name: string;
  logo: string;
};

const CardClub = ({ name, logo }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-xs max-w-md p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 font-bold text-sm">
          <img
            src={logo}
            alt={name}
            className="w-7 h-7 rounded-full border-2 border-gray-300 object-cover"
          />
          <span>{name}</span>
        </div>
        <AiOutlineEllipsis className="text-black text-2xl" />
      </div>
    </div>
  );
};

export default CardClub;
