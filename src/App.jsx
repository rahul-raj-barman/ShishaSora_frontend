import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import AppShell from "./components/app/AppShell";
import ProtectedRoute from "./components/app/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { resourceConfigs } from "./data/resourceConfigs";
import DashboardPage from "./pages/Admin/DashboardPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterOwnerPage from "./pages/Auth/RegisterOwnerPage";
import Home from "./pages/Home/Home";
import ResourcePage from "./pages/Resources/ResourcePage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterOwnerPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AppShell />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          {resourceConfigs.map((resource) => (
            <Route
              key={resource.key}
              path={resource.path}
              element={<ResourcePage config={resource} />}
            />
          ))}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
