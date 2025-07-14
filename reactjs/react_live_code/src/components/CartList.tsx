import React from "react";
import { ShoppingCart, Package, Trash2, CreditCard } from "lucide-react";
import { useCart } from "../contexts/CartProvider";

const CartList: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="glass-effect rounded-2xl p-8 shadow-xl border border-slate-200/50">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <ShoppingCart className="h-20 w-20 text-slate-300" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Shopping Cart
          </h2>
          <div className="py-8">
            <p className="text-xl text-slate-500 mb-2">Your cart is empty</p>
            <p className="text-slate-400">
              Add some amazing products to get started!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-effect rounded-2xl p-8 shadow-xl border border-slate-200/50">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <ShoppingCart className="h-8 w-8 text-slate-700" />
          <h2 className="text-3xl font-bold text-slate-800">Shopping Cart</h2>
        </div>
        <button
          onClick={clearCart}
          className="flex items-center space-x-2 text-red-500 hover:text-red-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-red-50 transition-all duration-200"
        >
          <Trash2 className="h-4 w-4" />
          <span>Clear Cart</span>
        </button>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-6 bg-white/50 border border-slate-200/30 rounded-xl hover:bg-white/70 transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                <Package className="h-6 w-6 text-slate-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-lg">
                  {item.name}
                </h3>
                <p className="text-2xl font-bold text-slate-800">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="flex items-center space-x-2 ml-4 text-red-500 hover:text-red-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-red-50 transition-all duration-200"
            >
              <Trash2 className="h-4 w-4" />
              <span>Remove</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200/50">
        <div className="bg-slate-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-slate-800">Total:</span>
            <span className="text-4xl font-bold text-slate-800">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>{cartItems.length} item(s) in cart</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span>Ready to checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
