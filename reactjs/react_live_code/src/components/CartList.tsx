import React from "react";
import { useCart } from "../contexts/CartProvider";

const CartList: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="glass-effect rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Shopping Cart
          </h2>
          <div className="py-8">
            <p className="text-xl text-gray-500 mb-2">Your cart is empty</p>
            <p className="text-gray-400">
              Add some amazing products to get started!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-effect rounded-2xl p-8 shadow-xl border border-white/20">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">🛒</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Shopping Cart
          </h2>
        </div>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-red-50 transition-all duration-200"
        >
          🗑️ Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-6 bg-white/50 border border-white/30 rounded-xl hover:bg-white/70 transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500 hover:text-red-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-red-50 transition-all duration-200"
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/30">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-gray-800">Total:</span>
            <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>🛍️ {cartItems.length} item(s) in cart</span>
            <span>💳 Ready to checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
