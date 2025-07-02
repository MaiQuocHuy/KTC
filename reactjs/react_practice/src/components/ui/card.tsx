import React from "react";
import { AiFillEyeInvisible, AiOutlineEllipsis } from "react-icons/ai";

const Card = () => {
  return (
    <div className="flex flex-col w-xs gap-4">
      <div className="bg-white shadow-md rounded-lg w-full p-3">
        {/* Time */}
        <div className="flex items-center justify-between">
          <div className="text-red-500 font-bold">7'</div>
          <div>
            <AiOutlineEllipsis className="font-bold text-black text-2xl" />
          </div>
        </div>
        {/* Country */}
        <div className="flex items-center justify-between">
          {/* Left Country */}
          <div className="space-x-2">
            <div className="inline text-sm font-bold">Spain</div>
            <img
              src="https://flagcdn.com/w40/es.png"
              alt="Spain Flag"
              className="w-5 h-5 inline rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
          {/* Scored */}
          <div>
            <div className=" bg-gray-100 px-3 py-1 rounded-full font-bold">
              <p>0 : 0</p>
            </div>
          </div>
          {/* Right Country */}
          <div className="space-x-2">
            <img
              src="https://flagcdn.com/w40/fr.png"
              alt="France Flag"
              className="w-5 h-5 inline rounded-full border-2 border-gray-300 object-cover"
            />
            <div className="inline font-bold text-sm">France</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg w-full p-3">
        {/* Name Club */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold space-x-4">
            {/* Manchester United  */}
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png"
              alt="Manchester United Logo"
              className="w-7 h-7 inline rounded-full border-2 border-gray-300 object-cover"
            />
            <div className="inline font-bold text-sm">Manchester United</div>
          </div>
          <div>
            <AiOutlineEllipsis className="font-bold text-black text-2xl" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg w-full p-3">
        {/* Payment Info */}
        <div className="flex items-center justify-between space-x-4">
          <div className="flex gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png"
              alt="Manchester United Logo"
              className="w-10 h-10 inline rounded-full border-2 border-gray-300 object-cover"
            />
            <div>
              <p className="text-sm font-bold">Wade Warren</p>
              <p className="text-xs text-blue-900 font-bold italic inline">
                VISA
              </p>
              <p className="text-xs text-black font-bold pl-2 inline">
                3123 12312 ****
              </p>
            </div>
          </div>
          <div className="flex items-end h-10">
            <AiFillEyeInvisible className="text-black" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg w-full px-3 py-4">
        {/* Card Progress */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex justify-between items-center gap-2">
              <span className="font-bold text-xs text-gray-700 bg-green-200 px-2 py-1 rounded-lg">
                Highlight
              </span>
              <span className="font-bold text-xs text-gray-700 bg-pink-200 px-2 py-1 rounded-lg">
                Feeds
              </span>
            </div>
            <div>
              <AiOutlineEllipsis className="text-black text-2xl font-bold" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm">Dashboard</h3>
            <span className="text-xs text-gray-500">
              Business management service
            </span>
          </div>
          <div className="flex items-center justify-between mt-2 gap-6">
            <div className="progress-fill bg-gray-300 h-2 rounded-lg w-full">
              <div className="w-2/5 bg-green-400 h-full rounded-lg" />
            </div>
            <span className="block font-bold text-xs">80%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
