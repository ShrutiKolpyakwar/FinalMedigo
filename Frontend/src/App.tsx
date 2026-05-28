import Navbar from "./components/NavbarSection/Navbar";
import Admin from "./pages/Admin";

import { Toaster } from "react-hot-toast";

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/LoginSection/Login";
import Signup from "./components/SignUpSection/Signup";
import GetStarted from "./components/GetStartedComponent/GetStarted";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ShopOwnerDashboard from "./pages/ShopOwnerDashboard";
import ProtectedRoute from "./components/ProtectedRoutesSection/ProtectedRoute";

function App() {

  return (

    <>

      <Toaster position="top-right" />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
            </>
          }
        />

        {/* GET STARTED */}
        <Route
          path="/getstarted"
          element={
            <>
              <Navbar />
              <GetStarted />
            </>
          }
        />

        {/* ADMIN LOGIN */}
        <Route
          path="/admin-login"
          element={<Admin />}
        />

        {/* USER DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRole="user">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* SHOP DASHBOARD */}
        <Route
          path="/shop-dashboard"
          element={
            <ProtectedRoute allowedRole="shopowner">
              <ShopOwnerDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </>

  );

}

export default App;