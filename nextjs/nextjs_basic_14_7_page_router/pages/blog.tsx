import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt:
        "Learn how to build modern web applications with Next.js and React.",
      date: "2024-07-10",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Understanding Page Router vs App Router",
      excerpt:
        "A comprehensive guide to choosing the right routing approach for your Next.js project.",
      date: "2024-07-08",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt:
        "Tips and tricks for creating beautiful, responsive user interfaces.",
      date: "2024-07-05",
      author: "Mike Johnson",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog - Our Latest Articles</title>
        <meta
          name="description"
          content="Read our latest blog posts and articles"
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
                className="text-blue-600 font-medium px-3 py-2 rounded-md text-sm"
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Stay updated with our latest articles and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-lg font-medium">
            Load More Posts
          </button>
        </div>
      </main>
    </div>
  );
}
