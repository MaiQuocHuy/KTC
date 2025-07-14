import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors font-medium"
            >
              Go Back Home
            </Link>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Or try visiting one of these pages:</p>
              <div className="mt-2 space-x-4">
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  Blog
                </Link>
                <Link
                  href="/products"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
