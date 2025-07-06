import React from "react";
import type { Product } from "../../types/Product";
import CartIcon from "./CartIcon";
import ProductCard from "../Product/ProductCard";

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Knorr Demiglace Sauce Powder 1kg",
    price: 315000,
    image:
      "https://images.unsplash.com/photo-1749740601792-8421854c5a95?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Kikkoman Soy Sauce 1L",
    price: 180000,
    image:
      "https://images.unsplash.com/photo-1750848299202-a95856df3be7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Do Luong Rice Paper (5 pcs)",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1750797636255-8c939940bcad?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Lea & Perrins Worcestershire Sauce 290ml",
    price: 150000,
    image:
      "https://plus.unsplash.com/premium_photo-1750889811017-936748278c86?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Thuan Phat Dipping Sauce",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1751182475956-1ced7a5f474f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Main Cart Component
const Cart: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Vietnamese Grocery Store
            </h1>
            <CartIcon />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Cart;
