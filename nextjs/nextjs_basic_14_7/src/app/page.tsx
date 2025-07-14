import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            This is the Home Page
          </p>
        </header>

        <nav className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/blog"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-center transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-center transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/products"
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-center transition-colors"
            >
              Products
            </Link>
            <Link
              href="/login"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-center transition-colors"
            >
              Login
            </Link>
          </div>
        </nav>

        <main className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Home Page Content
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Welcome to our multi-page Next.js application! This is a simple home
            page that serves as the entry point to our website.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Use the navigation links above to explore different sections of our
            site.
          </p>
        </main>
      </div>
    </div>
  );
}
