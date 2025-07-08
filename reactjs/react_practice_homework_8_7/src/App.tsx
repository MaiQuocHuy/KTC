import { Routes, Route, Navigate } from "react-router";
import Sidebar from "./components/Sidebar";
import PatientsPage from "./pages/PatientsPage";
import OverviewPage from "./pages/OverviewPage";
import MapPage from "./pages/MapPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DoctorsPage from "./pages/DoctorsPage";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";
import "./App.css";
import notification from "./assets/notification-bell-svgrepo-com.svg";
import search from "./assets/search-svgrepo-com.svg";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Blue Box */}
      <Sidebar />

      {/* Main Content Area - Red Box equivalent */}
      <div className="flex-1 bg-white">
        <div className="flex justify-between items-center border-b-2 border-gray-300 p-4">
          {/* Search bar */}
          <div className="flex items-center gap-2 border-2 border-gray-300 rounded-md px-1">
            <img src={search} alt="search" className="w-6 h-6" />
            <input
              type="text"
              placeholder="Search..."
              className="w-[300px] p-2 rounded-md"
            />
          </div>
          {/* Notification and Icon */}
          <div className="flex items-center gap-2">
            <div className="text-white px-4 py-2 rounded-md">
              <img
                src={notification}
                alt="notification"
                className="w-8 h-8 rounded-full text-white"
              />
            </div>
            <div className="flex items-center text-white px-4 py-2 rounded-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
                alt="user"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-black">Emma Kwan</span>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
