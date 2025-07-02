import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

type Props = {
  time: string;
  leftCountry: { name: string; flag: string };
  rightCountry: { name: string; flag: string };
  score: string;
};

const CardMatch = ({ time, leftCountry, rightCountry, score }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-xs max-w-md p-3">
      <div className="flex items-center justify-between">
        <div className="text-red-500 font-bold">{time}</div>
        <AiOutlineEllipsis className="text-black text-2xl" />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold">{leftCountry.name}</span>
          <img
            src={leftCountry.flag}
            alt={leftCountry.name}
            className="w-5 h-5 rounded-full border-2 border-gray-300 object-cover"
          />
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded-full font-bold">
          {score}
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={rightCountry.flag}
            alt={rightCountry.name}
            className="w-5 h-5 rounded-full border-2 border-gray-300 object-cover"
          />
          <span className="text-sm font-bold">{rightCountry.name}</span>
        </div>
      </div>
    </div>
  );
};

export default CardMatch;
