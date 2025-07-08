import type { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="flex-1 p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 animate-pulse rounded-lg h-64"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex-1 p-4">
        <p className="text-center text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-3"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const placeholder = target.nextElementSibling;
                  if (placeholder) placeholder.classList.remove("hidden");
                }}
              />
            ) : null}
            <div className="w-full h-40 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500 text-sm hidden">
              No Image
            </div>
            <h3 className="font-medium text-sm mb-2 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-lg font-bold text-blue-600">${product.price}</p>
            <p className="text-xs text-gray-500 mt-1">
              {product.category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
