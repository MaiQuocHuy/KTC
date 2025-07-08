import { NavLink } from "react-router";
import logo from "../assets/react.svg";

const Sidebar = () => {
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
    <div className="w-64 bg-white text-white h-screen border-r-2 border-gray-300">
      <div className="flex items-center gap-2 border-b-2 border-gray-300 p-4">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h2 className="text-xl font-bold text-black">H-Care</h2>
      </div>
      <nav className="mt-4 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors border-2 border-blue-400 duration-200 ${
                    isActive ? "bg-blue-200 text-blue-700" : "text-black"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
