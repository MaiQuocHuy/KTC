import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Patients", path: "/patients" },
    { name: "Overview", path: "/overview" },
    { name: "Map", path: "/map" },
    { name: "Departments", path: "/departments" },
    { name: "Doctors", path: "/doctors" },
    { name: "History", path: "/history" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 bg-blue-50 h-screen border-r border-blue-200">
      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-800 mb-8">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-200 text-blue-800"
                      : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
