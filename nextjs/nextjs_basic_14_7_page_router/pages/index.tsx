import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to our website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                My Website
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/products"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This is the home page of our Next.js application using Page Router.
          </p>
          <div className="space-x-4">
            <Link
              href="/blog"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              Read Our Blog
            </Link>
            <Link
              href="/products"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-lg font-medium"
            >
              View Products
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Latest Blog Posts
            </h3>
            <p className="text-gray-600">
              Check out our latest articles and insights.
            </p>
            <Link
              href="/blog"
              className="text-blue-500 hover:text-blue-600 mt-2 inline-block"
            >
              Read more →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Our Products
            </h3>
            <p className="text-gray-600">
              Discover our amazing products and services.
            </p>
            <Link
              href="/products"
              className="text-blue-500 hover:text-blue-600 mt-2 inline-block"
            >
              View products →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Get in Touch
            </h3>
            <p className="text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="text-blue-500 hover:text-blue-600 mt-2 inline-block"
            >
              Contact us →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
