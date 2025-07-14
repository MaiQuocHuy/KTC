import Head from 'next/head';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Product A',
      price: '$29.99',
      description: 'High-quality product with excellent features.',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Product B',
      price: '$49.99',
      description: 'Premium product designed for professionals.',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'Product C',
      price: '$19.99',
      description: 'Affordable solution for everyday use.',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      name: 'Product D',
      price: '$79.99',
      description: 'Advanced product with cutting-edge technology.',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      name: 'Product E',
      price: '$39.99',
      description: 'Versatile product suitable for multiple uses.',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      name: 'Product F',
      price: '$59.99',
      description: 'Innovative product with unique features.',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <>
      <Head>
        <title>Products Page</title>
        <meta name="description" content="Explore our product catalog" />
      </Head>
      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Products Page
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Discover our amazing collection of products
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Electronics</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Home & Garden</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Fashion</span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">Sports</span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">Books</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
