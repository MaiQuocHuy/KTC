import React from "react";
import { useCart, type CartItem } from "../contexts/CartProvider";

// Mock product data - at least 3 products as required
const mockProducts: CartItem[] = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 1299.99,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 999.99,
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch",
    price: 299.99,
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: 249.99,
  },
  {
    id: 5,
    name: "MacBook Air M2",
    price: 1199.99,
  },
  {
    id: 6,
    name: 'iPad Pro 11"',
    price: 799.99,
  },
];

const ProductList: React.FC = () => {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (product: CartItem) => {
    addToCart(product);
  };

  const isInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
          ✨ Product Catalog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing products with unbeatable prices. Add your favorites
          to cart!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProducts.map((product) => (
          <div
            key={product.id}
            className="glass-effect rounded-2xl overflow-hidden hover-lift shadow-xl border border-white/20"
          >
            <div className="p-8">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                disabled={isInCart(product.id)}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  isInCart(product.id)
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "btn-primary text-white hover:scale-105 active:scale-95"
                }`}
              >
                {isInCart(product.id) ? "✅ Added to Cart" : "🛒 Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-16 text-center">
          <div className="glass-effect inline-block px-8 py-4 rounded-2xl">
            <p className="text-lg font-semibold text-gray-700">
              🛍️ {cartItems.length} item(s) in your cart
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
