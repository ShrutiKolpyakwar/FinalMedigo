import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  allowedRole,
}: any) => {

  const token =
    localStorage.getItem("token");

  const role =
    localStorage.getItem("role");

  // IF NOT LOGGED IN
  if (!token) {

    // ADMIN
    if (allowedRole === "admin") {

      return (
        <Navigate
          to="/admin-login"
          replace
        />
      );

    }

    // USER / SHOP OWNER
    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  // WRONG ROLE
  if (role !== allowedRole) {

    // ADMIN
    if (allowedRole === "admin") {

      return (
        <Navigate
          to="/admin-login"
          replace
        />
      );

    }

    // USER / SHOP OWNER
    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  return children;

};

export default ProtectedRoute;