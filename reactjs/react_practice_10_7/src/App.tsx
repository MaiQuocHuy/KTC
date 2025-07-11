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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <BrowserRouter>
          <Navigation />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          </main>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}
