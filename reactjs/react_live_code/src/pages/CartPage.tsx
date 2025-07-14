import React from "react";
import { ShoppingCart } from "lucide-react";
import CartList from "../components/CartList";
import BuyerForm from "../components/BuyerForm";

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <ShoppingCart className="h-16 w-16 text-slate-400" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Your Shopping Cart
          </h1>
          <p className="text-xl text-slate-600">
            Review your items and complete your order
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div>
            <CartList />
          </div>

          <div>
            <BuyerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
