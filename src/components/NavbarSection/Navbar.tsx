// import "./Navbar.css";

// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (

//     <nav className="navbar">

//       <div className="logo">
//         Medigo
//       </div>

//       <div className="menu-icon">
//         ☰
//       </div>
// <div className="nav-buttons">

//   <Link
//     to="/"
//     className="nav-link"
//   >

//     <button className="home-btn">
//       Home
//     </button>

//   </Link>

//   <Link
//     to="/login"
//     className="nav-link"
//   >

//     <button className="login-btn">
//       Login
//     </button>

//   </Link>

//   <Link
//     to="/signup"
//     className="nav-link"
//   >

//     <button className="signup-btn">
//       Signup
//     </button>

//   </Link>

// </div>
//     </nav>
//   );
// };

// export default Navbar;
import "./Navbar.css";

import { Link } from "react-router-dom";

import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="logo">
        Medigo
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={menuOpen ? "nav-buttons active" : "nav-buttons"}>

        <Link
          to="/"
          className="nav-link"
        >

          <button className="home-btn">
            Home
          </button>

        </Link>

        <Link
          to="/login"
          className="nav-link"
        >

          <button className="login-btn">
            Login
          </button>

        </Link>

        <Link
          to="/signup"
          className="nav-link"
        >

          <button className="signup-btn">
            Signup
          </button>

        </Link>

      </div>

    </nav>
  );
};

export default Navbar;