import React from "react";
import { AiFillEyeInvisible } from "react-icons/ai";

type Props = {
  name: string;
  logo: string;
  type: string;
  number: string;
};

const CardPayment = ({ name, logo, type, number }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-xs max-w-md p-3">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
          />
          <div>
            <p className="text-sm font-bold">{name}</p>
            <p className="text-xs text-blue-900 font-bold italic inline">
              {type}
            </p>
            <p className="text-xs text-black font-bold pl-2 inline">{number}</p>
          </div>
        </div>
        <div className="flex items-end h-10">
          <AiFillEyeInvisible className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
