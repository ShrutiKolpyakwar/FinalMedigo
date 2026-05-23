import doctorImage from "../../assets/doctor.png";
import HeroButton from "./HeroButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (

  <section className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-6 md:gap-24 px-5 md:px-24 py-10 bg-gray-100 h-auto md:min-h-[calc(100vh-80px)] overflow-y-auto">

      {/* LEFT SIDE */}
      <div className="flex flex-col items-center">

        {/* HEADING */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-800 leading-tight text-center">
          Your Health, Our Priority
        </h1>

        {/* PARAGRAPH */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed text-center max-w-[900px]">
          Book appointments, consult doctors, and manage healthcare easily with MediGo
        </p>

        {/* BUTTON */}
        <div className="mt-8 flex justify-center w-full">
          <Link to="/getstarted">
            <HeroButton text="Get Started" />
          </Link>
        </div>

        {/* SERVICES BOX */}
        <div className="mt-10 bg-white p-5 md:p-6 rounded-3xl shadow-lg flex flex-col items-center self-center w-full max-w-[350px]">

          <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6 md:mb-10 text-center">
            Our Services
          </h2>

          <ul className="space-y-4 text-lg md:text-xl text-gray-700 text-center">
            <li>🩺 Doctor Consultation</li>
            <li>💊 Medicine Delivery</li>
          </ul>

        </div>

      </div>

       {/* RIGHT SIDE IMAGE */}
<div className="flex justify-start md:justify-center items-center mt-6 md:mt-0 pb-10">

  <img
    src={doctorImage}
    alt="doctor"
    className="w-[150px] sm:w-[220px] md:w-[400px] object-contain"
  />

</div>

    </section>
  );
};

export default Hero;