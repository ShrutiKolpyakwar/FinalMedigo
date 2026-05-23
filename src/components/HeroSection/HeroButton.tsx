type Props = {
  text: string;
};

const HeroButton = ({ text }: Props) => {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-md transition duration-300">
      {text}
    </button>
  );
};

export default HeroButton;