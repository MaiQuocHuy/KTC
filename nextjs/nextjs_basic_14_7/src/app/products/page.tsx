import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover our amazing product lineup
          </p>
        </header>

        <nav className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>

        <main className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="bg-gray-100 dark:bg-gray-700 h-32 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Product Image
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Premium Software
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Advanced software solution for modern businesses.
              </p>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                $99.99
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="bg-gray-100 dark:bg-gray-700 h-32 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Product Image
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Web Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Comprehensive web hosting and management service.
              </p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">
                $19.99/month
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="bg-gray-100 dark:bg-gray-700 h-32 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Product Image
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Consulting Package
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Professional consulting services for your business.
              </p>
              <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                $149.99
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Our Products?
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>✅ High-quality and reliable solutions</li>
              <li>✅ 24/7 customer support</li>
              <li>✅ Regular updates and maintenance</li>
              <li>✅ Competitive pricing</li>
              <li>✅ Satisfaction guarantee</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
