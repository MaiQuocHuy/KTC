import React from "react";
import { useCart } from "../../contexts/cart";
import { formatPrice } from "../../helper/utils";

// Cart Dropdown Component
const CartDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden">
        <div className="max-h-64">
          {cartItems.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="px-4 py-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-b-0 relative"
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-800 truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-blue-600 font-semibold">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-center text-sm font-semibold">
                      {item.quantity} x {formatPrice(item.price)}
                    </span>
                  </div>
                  <div
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-red-500 hover:text-red-700 transition-colors absolute -left-6 top-0 border border-gray-500 p-1 rounded-full bg-gray-300 cursor-pointer"
                  >
                    Xóa
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-gray-800">Tổng cộng:</span>
              <span className="font-bold text-lg text-red-500">
                {formatPrice(getTotalPrice())}
              </span>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => alert("View Cart clicked!")}
                className="flex-1 bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Xem giỏ hàng
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;
