import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get in touch with our team
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
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Office
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>📍 123 Business Street</p>
                <p>City, State 12345</p>
                <p>📞 (555) 123-4567</p>
                <p>✉️ info@company.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Send us a Message
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We'd love to hear from you! Contact us using the information above
              or visit our office during business hours.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
