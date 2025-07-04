import React, { useState } from "react";
import { useCart } from "../../contexts/cart";
import CartDropdown from "./CartDropdown";

// Cart Icon Component
const CartIcon: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        🛒
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </button>

      <CartDropdown
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      />
    </div>
  );
};

export default CartIcon;
