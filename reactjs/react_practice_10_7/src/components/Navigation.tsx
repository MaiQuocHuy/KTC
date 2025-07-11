import { Link, useNavigate, useLocation } from "react-router";
import { useAuth } from "../hooks";
import { APP_CONFIG } from "../constants";
import type { NavItem } from "../types";

const NAV_ITEMS: NavItem[] = [
  { path: "/tasks", label: "Tasks", exact: true },
  { path: "/create", label: "Create Task", exact: false },
  { path: "/assignee-me", label: "Assigned to Me", exact: false },
];

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  if (!user) {
    return null; // Hide navigation if user is not logged in
  }

  const isActive = (path: string, exact: boolean): boolean => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 mb-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">
              {APP_CONFIG.name}
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path, item.exact)
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md text-sm bg-red-500 font-medium transition-colors duration-200 text-white hover:bg-red-600"
              aria-label="Logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
