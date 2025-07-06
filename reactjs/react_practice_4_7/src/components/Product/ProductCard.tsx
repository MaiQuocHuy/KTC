import React from "react";
import type { Product } from "../../types/Product";
import { useCart } from "../../contexts/cart";
import type { CartItem } from "../../types/Cart";
import { formatPrice } from "../../helper/utils";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();

  const cartItem = cartItems.find((item: CartItem) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleIncrease = () => {
    if (cartItem) {
      updateQuantity(product.id, quantity + 1);
    } else {
      addToCart(product);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all duration-200">
      <div>
        <img src={product.image} alt="" className="w-full h-40 object-cover" />
      </div>
      <div className="mb-3">
        <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="font-bold text-lg text-green-800">
          {formatPrice(product.price)}
        </p>
      </div>

      <div className="flex items-center">
        {quantity > 0 ? (
          <div className="flex items-center space-x-2 w-full justify-between border-2 border-green-700">
            <button
              onClick={handleDecrease}
              disabled={quantity === 0}
              className="border-r-2  border-r-green-700  w-8 h-8 flex items-center justify-center text-green-700 hover:bg-green-800 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              -
            </button>

            <span className="w-8 text-center font-semibold text-gray-800">
              {quantity}
            </span>

            <button
              onClick={handleIncrease}
              className="border-l-2 border-l-green-700 w-8 h-8  text-green-700 flex items-center justify-center hover:bg-green-800 hover:text-white transition-colors"
            >
              +
            </button>
          </div>
        ) : (
          <div className="flex-1">
            <button
              onClick={() => addToCart(product)}
              className="w-full border-green-700 border-2 bg-white text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
