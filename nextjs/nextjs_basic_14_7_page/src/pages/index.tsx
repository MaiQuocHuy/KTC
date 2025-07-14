import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the home page" />
      </Head>
      <div className="px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Home Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This is the main landing page of our application.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
              <p className="text-gray-600">
                Discover amazing features and functionality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
              <p className="text-gray-600">
                Easy to use and navigate through different sections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Feature 3</h2>
              <p className="text-gray-600">
                Built with modern technology stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
