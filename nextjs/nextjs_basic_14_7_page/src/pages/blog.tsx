import Head from 'next/head';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      excerpt: 'Learn the basics of Next.js and how to build modern web applications.',
      date: '2024-01-15',
      author: 'John Doe'
    },
    {
      id: 2,
      title: 'Understanding React Components',
      excerpt: 'Dive deep into React components and their lifecycle methods.',
      date: '2024-01-10',
      author: 'Jane Smith'
    },
    {
      id: 3,
      title: 'CSS Styling Best Practices',
      excerpt: 'Learn how to write maintainable and scalable CSS code.',
      date: '2024-01-05',
      author: 'Bob Johnson'
    }
  ];

  return (
    <>
      <Head>
        <title>Blog Page</title>
        <meta name="description" content="Read our latest blog posts" />
      </Head>
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Blog Page
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Discover our latest articles and insights
          </p>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
