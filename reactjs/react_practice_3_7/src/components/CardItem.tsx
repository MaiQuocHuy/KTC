import React from "react";

interface CardItemProps {
  information: string;
  newPrice: number;
  oldPrice: number;
  discount?: number;
}

const CardItem: React.FC<CardItemProps> = ({
  information,
  newPrice,
  oldPrice,
  discount,
}) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <div className="w-1/4">
      <div className="mb-3 relative">
        <img
          src="https://2tmobile.com/wp-content/uploads/2022/05/MD818.jpg"
          alt="random image"
          className="w-full h-48 object-cover"
        />
        {discount && (
          <div className="absolute top-0 right-0 px-2 py-1 bg-[#FF6700] rounded-lg">
            <span>-{discount + "%"}</span>
          </div>
        )}
      </div>
      <div className="py-1 space-y-1">
        <p className="text-gray-800 text-sm leading-relaxed font-bold">
          {information}
        </p>
        <span className="text-red-600 text-xl font-bold mr-1">
          {formatPrice(newPrice)}
        </span>
        <del className="text-gray-500 text-lg">{formatPrice(oldPrice)}</del>
      </div>
    </div>
  );
};

export default CardItem;
