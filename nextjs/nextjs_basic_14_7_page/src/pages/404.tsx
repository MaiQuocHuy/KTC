import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist" />
      </Head>
      <div className="px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you are looking for doesn't exist.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">What can you do?</h3>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                • Check if the URL is correct
              </p>
              <p className="text-gray-600">
                • Go back to the previous page
              </p>
              <p className="text-gray-600">
                • Visit our homepage
              </p>
              <p className="text-gray-600">
                • Contact us if you think this is an error
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Go to Homepage
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                Blog
              </Link>
              <Link href="/products" className="text-blue-600 hover:text-blue-800">
                Products
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                Contact
              </Link>
              <Link href="/login" className="text-blue-600 hover:text-blue-800">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
