import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartProvider";

const Navigation: React.FC = () => {
  const location = useLocation();
  const { cartItems } = useCart();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              🛍️ ShopCart
            </Link>

            <div className="flex space-x-2">
              <Link
                to="/"
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive("/")
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-white/50 hover:shadow-md"
                }`}
              >
                🏠 Home
              </Link>

              <Link
                to="/cart"
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative ${
                  isActive("/cart")
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-white/50 hover:shadow-md"
                }`}
              >
                🛒 Cart
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
