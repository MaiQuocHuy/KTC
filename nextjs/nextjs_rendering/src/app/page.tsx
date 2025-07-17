import NavigationClient from "@/components/NavigationClient";
import AuthRedirect from "@/components/AuthRedirect";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AuthRedirect />
      <div className="max-w-6xl mx-auto">
        <NavigationClient />

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Next.js Rendering Methods Demo
          </h1>

          <div className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-4">
                This application demonstrates the 4 different rendering methods
                available in Next.js:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Server-Side Rendering (SSR)
                  </h3>
                  <p className="text-gray-600">
                    Pages are rendered on the server for each request. Always
                    fresh data but slower response times.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">
                    Static Site Generation (SSG)
                  </h3>
                  <p className="text-gray-600">
                    Pages are pre-rendered at build time. Very fast loading but
                    data may be stale.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">
                    Incremental Static Regeneration (ISR)
                  </h3>
                  <p className="text-gray-600">
                    Static generation with periodic revalidation. Good balance
                    between performance and freshness.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    Client-Side Rendering (CSR)
                  </h3>
                  <p className="text-gray-600">
                    Pages are rendered on the client. Interactive features and
                    real-time updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Features:
              </h3>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>Task listing with different rendering methods</li>
                <li>Task details page using ISR</li>
                <li>Interactive task management with CSR</li>
                <li>API integration with external task management system</li>
                <li>Dashboard with authentication</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
