import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Page
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Welcome to our blog section
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
            Latest Blog Posts
          </h2>

          <div className="space-y-6">
            <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Getting Started with Next.js
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Posted on January 15, 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how to build modern web applications with Next.js. This
                comprehensive guide covers everything from setup to deployment.
              </p>
            </article>

            <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Understanding React Components
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Posted on January 10, 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Deep dive into React components and how they work. Learn about
                functional components, props, and state management.
              </p>
            </article>

            <article className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Web Development Best Practices
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Posted on January 5, 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Discover the best practices for modern web development. From
                code organization to performance optimization.
              </p>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
