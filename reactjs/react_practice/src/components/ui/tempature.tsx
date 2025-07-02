import React from "react";
import {
  AiFillAmazonCircle,
  AiFillRightCircle,
  AiOutlineEllipsis,
} from "react-icons/ai";

const Temperature = () => {
  return (
    <div className="flex flex-col gap-4 w-xs">
      <div className="bg-[#FAFFDB] shadow-md rounded-lg w-full p-4 overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Girl Logo"
              className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
            />
            <div className="ml-2">
              <h4 className="text-sm font-bold">Landescape</h4>
              <span className="text-xs font-medium text-black">432Km</span>
            </div>
          </div>
          <div>
            <AiOutlineEllipsis className="text-2xl text-black" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg w-full p-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Girl Logo"
              className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
            />
            <div className="ml-2">
              <h4 className="text-sm font-bold">Falset Mountains</h4>
              <span className="text-xs font-medium text-black">
                432Km, 3 Week
              </span>
            </div>
          </div>
          <div>
            <AiFillAmazonCircle className="text-3xl text-green-500" />
          </div>
        </div>
      </div>
      <div className="bg-[EDF8FF] shadow-md rounded-lg w-full p-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              // Sunny Logo
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
            />
            <div className="ml-2">
              <h4 className="text-sm font-bold">Falset Mountains</h4>
              <span className="text-xs font-medium text-black">
                432Km, 3 Week
              </span>
            </div>
          </div>
          <div>
            <AiFillRightCircle className="text-3xl text-purple-600" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg w-full p-4 overflow-hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-center p-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
          </div>
          <div className="flex flex-col items-center p-2 ">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-[#F6FBFF]">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
          </div>
        </div>
      </div>
      <div
        className="shadow-md rounded-lg w-full p-4 overflow-hidden"
        style={{
          background: "linear-gradient(to right, #FF512F 0%, #DD2476 100%)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="ml-2">
            <h4 className="text-sm font-bold text-white">Seatke</h4>
            <span className="text-xs font-medium text-white">Cloudy</span>
          </div>
          <span className="text-3xl font-bold text-white">32°</span>
          <div>
            <AiFillAmazonCircle className="text-3xl text-white" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg w-full p-4 overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="ml-2">
            <h4 className="text-sm font-bold">Great day to schedule</h4>
            <span className="text-xs font-medium text-black">
              Your usual hours
            </span>
          </div>
          <div>
            <AiOutlineEllipsis className="text-2xl text-black" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col items-center p-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
            <span className="text-[8px] text-gray-500">02:27 PM</span>
          </div>
          <div className="flex flex-col items-center p-2 ">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
            <span className="text-[8px] text-gray-500">02:27 PM</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-[#F6FBFF]">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
            <span className="text-[8px] text-gray-500">02:27 PM</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
            <span className="text-[8px] text-gray-500">02:27 PM</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sunny Logo"
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="font-bold text-xs">Mon</span>
            <span className="text-[8px] text-gray-500">02:27 PM</span>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg w-full p-4 overflow-hidden">
        <div className="flex items-center">
          <div className="border-r-2 border-gray-300 pr-10">
            <span className="font-bold text-sm block">Jun</span>
            <span className="text-sm font-bold text-red-600">23</span>
          </div>
          <div className="ml-18">
            <span className="block">Wednesday</span>
            <span className="text-xs text-gray-500">08:00 PM - 18:30 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
