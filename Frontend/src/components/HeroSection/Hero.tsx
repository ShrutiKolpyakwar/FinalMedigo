import doctorImage from "../../assets/doctor.png";
import HeroButton from "./HeroButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 px-5 md:px-16 py-6 md:py-4 bg-gray-100 min-h-screen md:h-[calc(100vh-80px)]">

      {/* LEFT SECTION */}
      <div className="flex flex-col items-center text-center">

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
          Your Health, Our Priority
        </h1>

        <p className="mt-5 text-base sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-[850px]">
          Book appointments, consult doctors, and manage healthcare easily with MediGo
        </p>

        {/* BUTTON */}
        <div className="mt-7">
          <Link to="/getstarted">
            <HeroButton text="Get Started" />
          </Link>
        </div>

        {/* SERVICES CARD */}
        <div className="mt-8 bg-white px-6 md:px-8 py-6 rounded-3xl shadow-lg flex flex-col items-center w-full max-w-[360px]">

          <h2 className="text-2xl md:text-5xl font-bold text-slate-700 mb-6">
            Our Services
          </h2>

          <ul className="space-y-4 text-base md:text-xl text-gray-700">
            <li>🩺 Doctor Consultation</li>
            <li>💊 Medicine Delivery</li>
          </ul>

        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="flex justify-center items-center mt-4 md:mt-0 pb-6 md:pb-0">

        <img
          src={doctorImage}
          alt="doctor"
          className="w-[160px] sm:w-[220px] md:w-[360px] h-auto object-contain"
        />

      </div>

    </section>
  );
};

export default Hero;