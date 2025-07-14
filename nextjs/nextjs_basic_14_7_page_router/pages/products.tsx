import Head from "next/head";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Web Design",
      description:
        "Custom website design tailored to your brand and business needs.",
      price: "$2,999",
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      name: "E-commerce Solution",
      description:
        "Complete online store with payment processing and inventory management.",
      price: "$4,999",
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      name: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      price: "$7,999",
      image: "/api/placeholder/300/200",
    },
    {
      id: 4,
      name: "SEO Optimization",
      description:
        "Comprehensive SEO strategy to improve your website's search rankings.",
      price: "$1,499",
      image: "/api/placeholder/300/200",
    },
    {
      id: 5,
      name: "Cloud Hosting",
      description:
        "Reliable and scalable cloud hosting solutions for your applications.",
      price: "$99/month",
      image: "/api/placeholder/300/200",
    },
    {
      id: 6,
      name: "Digital Marketing",
      description:
        "Complete digital marketing strategy including social media and PPC.",
      price: "$2,499",
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Products - Our Services</title>
        <meta
          name="description"
          content="Explore our range of digital products and services"
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
                className="text-blue-600 font-medium px-3 py-2 rounded-md text-sm"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products & Services
          </h1>
          <p className="text-xl text-gray-600">
            Discover our comprehensive range of digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-6">
            We offer tailored solutions to meet your specific business
            requirements.
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium"
          >
            Get a Quote
          </Link>
        </div>
      </main>
    </div>
  );
}
