import React from "react";

interface CardDealProps {
  information: string;
  newPrice: number;
  oldPrice: number;
  discount: number;
  sold: number;
}

const CardDeal: React.FC<CardDealProps> = ({
  information,
  newPrice,
  oldPrice,
  discount,
  sold,
}) => {
  const formatPriceToUSD = (price: number) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="w-1/6">
      <div className="mb-3 relative">
        <img
          src="https://2tmobile.com/wp-content/uploads/2022/05/MD818.jpg"
          alt="random image"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 px-2 py-1 bg-[#FF6700] rounded-lg">
          <span>-{discount}%</span>
        </div>
      </div>
      <div className="py-1 space-y-1">
        <p className=" text-gray-500 text-sm leading-relaxed border-b-2 border-gray-200">
          {information}
        </p>
        <span className="py-2 inline-block text-green-600 text-sm font-bold mr-1">
          {formatPriceToUSD(newPrice)}
        </span>
        <del className="text-gray-500 text-xs mx-2">
          {formatPriceToUSD(oldPrice)}
        </del>
        <span className="text-red-400 text-xs font-semibold">
          {discount}% off
        </span>
        <span className="block text-sm text-blue-400">
          KSJdlkas sakdjaslkdjklas asdjaskljsadkl
        </span>
        <div>
          {/* Rating from 0 to 5 display icon with color is yellow(active) and gray(inactive)*/}
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="text-yellow-500">
              {index < 4 ? "★" : "☆"}
            </span>
          ))}
        </div>
        <div className="bg-gray-300 h-3 rounded-xs">
          <div className="bg-yellow-500 w-4/5 h-full"></div>
        </div>
        <span className="text-gray-500 text-sm">Sold: {sold}</span>
      </div>
    </div>
  );
};

export default CardDeal;
