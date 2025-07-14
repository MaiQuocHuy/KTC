import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingCart, Store } from "lucide-react";
import { useCart } from "../contexts/CartProvider";

const Navigation: React.FC = () => {
  const location = useLocation();
  const { cartItems } = useCart();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b border-slate-200/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors"
            >
              <Store className="h-8 w-8" />
              <span>ShopCart</span>
            </Link>

            <div className="flex space-x-2">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold ${
                  isActive("/")
                    ? "bg-slate-800 text-white shadow-lg"
                    : "text-slate-700 hover:bg-slate-100 hover:shadow-md"
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>

              <Link
                to="/cart"
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold relative ${
                  isActive("/cart")
                    ? "bg-slate-800 text-white shadow-lg"
                    : "text-slate-700 hover:bg-slate-100 hover:shadow-md"
                }`}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
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
