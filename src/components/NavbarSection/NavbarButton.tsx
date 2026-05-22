import "./NavbarButton.css";

type Props = {
  text: string;
  type: "login" | "signup";
};

const NavbarButton = ({ text, type }: Props) => {
  return (
    <button className={`nav-btn ${type}`}>
      {text}
    </button>
  );
};

export default NavbarButton;