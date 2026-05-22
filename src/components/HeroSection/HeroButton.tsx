import "./HeroButton.css";

type Props = {
  text: string;
};

const HeroButton = ({ text }: Props) => {
  return (
    <button className="hero-btn">
      {text}
    </button>
  );
};

export default HeroButton;