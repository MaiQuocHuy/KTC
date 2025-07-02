import React from "react";
import { AiFillPhone, AiOutlineBell, AiOutlineCamera } from "react-icons/ai";

const Logo = () => {
  return (
    <div className="flex flex-col gap-4 w-xs">
      <div className="bg-white shadow-md rounded-lg w-full p-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Girl Logo"
              className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
            />
            <div className="ml-2">
              <h4 className="text-sm font-bold">Yolanda</h4>
              <span className="text-xs font-medium text-gray-400">
                Web Development
              </span>
            </div>
          </div>
          <div>
            {/* icon camera */}
            <AiOutlineCamera className="text-2xl text-black" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg w-full overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Girl Logo"
              className="w-16 h-full object-cover"
            />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">María</h4>
            </div>
          </div>
          <div className="mr-4">
            {/* icon camera */}
            <AiFillPhone className="text-2xl text-black" />
          </div>
        </div>
      </div>
      <div className="shadow-md rounded-full w-full p-4 bg-[#12C0E7] overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Girl Logo"
              className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
            />
            <div className="ml-2">
              <h4 className="text-white font-bold px-2 text-lg">
                Miriam Jiminez
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md rounded-full w-full p-4 bg-[#740EF5] overflow-hidden">
        <div className="flex items-center">
          <div className="flex items-center space-x-0">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="w-14 h-14 rounded-full border-2 border-white z-30"
              alt="User 1"
            />
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              className="w-14 h-14 rounded-full border-2 border-white -ml-3 z-20"
              alt="User 2"
            />
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              className="w-14 h-14 rounded-full border-2 border-white -ml-3 z-10"
              alt="User 3"
            />
          </div>
          <div className="mx-auto text-center">
            <h4 className="text-white font-bold text-xl">Team</h4>
            <span className="text-white text-xs">Two currently</span>
          </div>
        </div>
      </div>
      <div className="shadow-md rounded-full w-full p-4 bg-[#FFF614] overflow-hidden">
        <div className="flex items-center">
          <div className="flex items-center space-x-0">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="w-14 h-14 rounded-full border-2 border-white z-30"
              alt="User 1"
            />
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              className="w-14 h-14 rounded-full border-2 border-white -ml-2 z-40"
              alt="User 2"
            />
          </div>
          <div className="mx-auto text-center">
            <h4 className="text-black font-bold px-2 text-2xl">New Teams</h4>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg w-full p-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.simpleicons.org/nike/000000"
              alt="Nike Logo"
              className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
            />
            <div className="ml-2">
              <h4 className="text-sm font-bold">Yolanda</h4>
              <span className="text-xs font-medium text-gray-400">
                Web Development
              </span>
            </div>
          </div>
          <div>
            {/* icon camera */}
            {/* <AiOutlineCamera className="text-2xl text-black" />
             */}
            <span className="text-sm font-bold text-black block">-27.50</span>
            <span className="text-xs font-medium text-gray-400">11:00AM</span>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg w-full p-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="block mr-2 font-bold text-sm">
            All your notification are well turned on
          </span>

          <div className="flex items-center space-x-2 pl-4 border-l-2 border-gray-300">
            <AiOutlineBell className="text-xl text-black inline" />
            <span className="text-sm font-bold text-white px-4 py-1  bg-black rounded-3xl">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
