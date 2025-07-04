import React from "react";
import { IoClose } from "react-icons/io5";

interface ProductItemProps {
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, price }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <div className="w-1/4 flex items-stretch gap-4 border border-gray-300 rounded-lg p-2 relative">
      <img
        src="https://2tmobile.com/wp-content/uploads/2022/05/MD818.jpg"
        alt="product"
        className="w-16 h-16 object-cover rounded-lg"
      />

      <div className="flex flex-col justify-between flex-1">
        <span className="font-medium">{name}</span>
        <span className="font-bold text-sm text-red-500">
          {formatPrice(price)}  
        </span>
      </div>
      <span className="bg-gray-500 flex items-center justify-center text-sm leading-none text-white w-6 h-6 rounded-full absolute top-2 right-2">
        <IoClose size={12} />
      </span>
    </div>
  );
};

export default ProductItem;
