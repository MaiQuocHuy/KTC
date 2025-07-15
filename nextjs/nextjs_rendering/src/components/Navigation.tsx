import Link from "next/link";

export default function Navigation() {
  const routes = [
    { href: "/task-ssr", label: "SSR", description: "Server-Side Rendering" },
    { href: "/task-ssg", label: "SSG", description: "Static Site Generation" },
    { href: "/task-csr", label: "CSR", description: "Client-Side Rendering" },
  ];

  return (
    <nav className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Task Management System
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50 hover:bg-gray-100"
          >
            <div className="text-lg font-semibold text-blue-600 mb-2">
              {route.label}
            </div>
            <div className="text-sm text-gray-600">{route.description}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
