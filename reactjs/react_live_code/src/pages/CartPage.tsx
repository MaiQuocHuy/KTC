import React from "react";
import CartList from "../components/CartList";
import BuyerForm from "../components/BuyerForm";

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🛒 Your Shopping Cart
          </h1>
          <p className="text-xl text-gray-600">
            Review your items and complete your order
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Cart List */}
          <div>
            <CartList />
          </div>

          {/* Buyer Form */}
          <div>
            <BuyerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
