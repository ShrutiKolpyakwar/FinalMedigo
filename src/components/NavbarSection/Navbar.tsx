import "./Navbar.css";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        Medigo
      </div>

      <div className="nav-buttons">

        <NavbarButton
          text="Login"
          type="login"
        />

        <NavbarButton
          text="Signup"
          type="signup"
        />

      </div>

    </nav>
  );
};

export default Navbar;