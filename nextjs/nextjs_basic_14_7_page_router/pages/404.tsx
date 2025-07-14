import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist"
        />
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

      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist or has been
              moved.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-lg font-medium"
            >
              Contact Support
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Popular Pages
              </h3>
              <ul className="space-y-2 text-left">
                <li>
                  <Link href="/" className="text-blue-500 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Recent Posts
              </h3>
              <ul className="space-y-2 text-left">
                <li>
                  <Link
                    href="/blog"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Getting Started with Next.js
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Page Router vs App Router
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Building with Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Get in touch with our
                support team.
              </p>
              <Link
                href="/contact"
                className="text-blue-500 hover:text-blue-600"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
