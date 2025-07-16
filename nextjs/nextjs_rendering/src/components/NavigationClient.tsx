"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function NavigationClient() {
  const { isLoggedIn } = useAuth();

  const routes = [
    { href: "/task-ssr", label: "SSR", description: "Server-Side Rendering" },
    { href: "/task-ssg", label: "SSG", description: "Static Site Generation" },
    { href: "/task-csr", label: "CSR", description: "Client-Side Rendering" },
  ];

  const authRoutes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      description: "Task Management Dashboard",
    },
    { href: "/login", label: "Login", description: "User Authentication" },
  ];

  return (
    <nav className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Task Management System
      </h1>

      <div className="space-y-6">
        {/* Authentication Routes */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Authentication
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50 hover:bg-gray-100"
              >
                <div className="text-lg font-semibold text-purple-600 mb-2">
                  {route.label}
                </div>
                <div className="text-sm text-gray-600">{route.description}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Rendering Methods */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Rendering Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>
      </div>
    </nav>
  );
} 