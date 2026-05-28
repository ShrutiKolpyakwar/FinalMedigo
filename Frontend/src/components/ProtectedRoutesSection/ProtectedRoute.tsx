// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({
// //   children,
// //   allowedRole,
// // }: any) => {

// //   const token =
// //     localStorage.getItem("token");

// //   const role =
// //     localStorage.getItem("role");

// //   // IF NOT LOGGED IN
// //   if (!token) {

// //     // ADMIN
// //     if (allowedRole === "admin") {

// //       return (
// //         <Navigate
// //           to="/admin-login"
// //           replace
// //         />
// //       );

// //     }

// //     // USER / SHOP OWNER
// //     return (
// //       <Navigate
// //         to="/login"
// //         replace
// //       />
// //     );

// //   }

// //   // WRONG ROLE
// //   if (role !== allowedRole) {

// //     // ADMIN
// //     if (allowedRole === "admin") {

// //       return (
// //         <Navigate
// //           to="/admin-login"
// //           replace
// //         />
// //       );

// //     }

// //     // USER / SHOP OWNER
// //     return (
// //       <Navigate
// //         to="/login"
// //         replace
// //       />
// //     );

// //   }

// //   return children;

// // };

// // export default ProtectedRoute;
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({
//   children,
//   allowedRole,
// }: any) => {

//   const token =
//     localStorage.getItem("token");

//   const role =
//     localStorage.getItem("role");

//   if (!token) {

//     return <Navigate to="/login" />;

//   }

//   if (role !== allowedRole) {

//     if (role === "admin") {

//       return (
//         <Navigate to="/admin-dashboard" />
//       );

//     }

//     if (role === "shopowner") {

//       return (
//         <Navigate to="/shop-dashboard" />
//       );

//     }

//     return (
//       <Navigate to="/dashboard" />
//     );

//   }

//   return children;

// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  allowedRole,
}: any) => {

  const token =
    localStorage.getItem("token");

  const role =
    localStorage.getItem("role");

  // NO TOKEN
  if (!token) {

    // ADMIN PAGE
    if (allowedRole === "admin") {

      return (
        <Navigate
          to="/admin-login"
          replace
        />
      );

    }

    // USER + SHOP OWNER
    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  // WRONG ROLE
  if (role !== allowedRole) {

    // ADMIN TRYING WRONG ACCESS
    if (allowedRole === "admin") {

      return (
        <Navigate
          to="/admin-login"
          replace
        />
      );

    }

    // SHOP OWNER TRYING WRONG ACCESS
    if (allowedRole === "shopowner") {

      return (
        <Navigate
          to="/login"
          replace
        />
      );

    }

    // NORMAL USER
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