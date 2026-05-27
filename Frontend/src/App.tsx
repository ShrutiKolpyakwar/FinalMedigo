import Navbar from "./components/NavbarSection/Navbar";
import Admin from "./pages/Admin";

import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/LoginSection/Login";
import Signup from "./components/SignUpSection/Signup";
import GetStarted from "./components/GetStartedComponent/GetStarted";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ShopOwnerDashboard from "./pages/ShopOwnerDashboard";
import ProtectedRoute from "./components/ProtectedRoutesSection/ProtectedRoute";
import ForgotPassword from "./components/ForgotPasswordSection/ForgotPassword";

function App() {

  return (

    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      {/* Login */}
      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
          </>
        }
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={
          <>
            <Navbar />
            <Signup />
          </>
        }
      />
      
       {/* Get Started*/}
        <Route
        path="/getstarted"
        element={
          <>
            <Navbar />
            <GetStarted />
          </>
        }
      />

      {/* Fporgot Password*/}
        <Route
        path="/forgotpassword"
        element={
          <>
            <Navbar />
            <ForgotPassword />
          </>
        }
      />

      <Route
  path="/admin-login"
  element={<Admin />}
/>

     {/* Protected User Dashboard */}
<Route
  path="/dashboard"
  element={
    <ProtectedRoute allowedRole="user">
      <Dashboard />
    </ProtectedRoute>
  }
/>

{/* Protected Admin Dashboard */}
<Route
  path="/admin-dashboard"
  element={
    <ProtectedRoute allowedRole="admin">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
     {/* Protected Shop Dashboard */}
<Route
  path="/shop-dashboard"
  element={
    <ProtectedRoute allowedRole="shopowner">
      <ShopOwnerDashboard />
    </ProtectedRoute>
  }
/>
    </Routes>

  );
}

export default App;