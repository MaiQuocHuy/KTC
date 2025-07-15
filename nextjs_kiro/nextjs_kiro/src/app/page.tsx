import { ProductGrid } from "@/components/products/product-grid";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Fresh Fruits Delivered
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the finest selection of fresh, organic fruits delivered
          straight to your door. Quality guaranteed, freshness assured.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            🚚 Free Delivery
          </div>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            🌱 100% Organic
          </div>
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            ⭐ Premium Quality
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Fresh Fruits</h2>
          <p className="text-gray-600">Handpicked for quality and freshness</p>
        </div>
        <ProductGrid />
      </section>
    </div>
  );
}
