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
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <h3 className="font-semibold text-gray-800">Shopping Cart</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="max-h-64 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="px-4 py-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-800 truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-blue-600 font-semibold">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 ml-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>

                    <span className="w-6 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full border border-blue-500 bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-gray-800">Total:</span>
              <span className="font-bold text-lg text-blue-600">
                {formatPrice(getTotalPrice())}
              </span>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={() => alert("View Cart clicked!")}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                View Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;
