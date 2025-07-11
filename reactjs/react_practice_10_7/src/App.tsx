import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "./providers/AuthProvider";
import { Navigation, ProtectedRoute } from "./components";

// Page imports
import AccessDenied from "./pages/AccessDenied";
import AssigneeMe from "./pages/AssigneeMe";
import CreateTask from "./pages/CreateTask";
import Login from "./pages/Login";
import Tasks from "./pages/Task";
import UpdateTask from "./pages/UpdateTask";

// Styles
import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-50 min-h-screen">
        <BrowserRouter>
          <Navigation />
          <div className="container-fluid mx-auto px-8 py-4">
            <Routes>
              {/* Public routes */}
              <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />

              {/* Protected routes */}
              <Route
                path="/tasks"
                element={
                  <ProtectedRoute>
                    <Tasks />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/create"
                element={
                  <ProtectedRoute>
                    <CreateTask />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/update/:id"
                element={
                  <ProtectedRoute>
                    <UpdateTask />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/assignee-me"
                element={
                  <ProtectedRoute>
                    <AssigneeMe />
                  </ProtectedRoute>
                }
              />

              {/* Fallback route */}
              <Route path="*" element={<AccessDenied />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}
