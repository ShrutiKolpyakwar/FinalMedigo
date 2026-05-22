import "./Hero.css";
import doctorImage from "../../assets/doctor.png";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <section className="hero-section">

      <div className="hero-left">

        <h1>
          Your Health,
          <br />
          Our Priority
        </h1>

        <p>
          Book appointments, consult doctors, and manage
          healthcare easily with MediGo
        </p>

        <div className="hero-buttons">
          <HeroButton text="Get Started" />
          <HeroButton text="Learn More" />
        </div>
        

        <div className="services-box">

          <h2>Our Services</h2>

          <ul>
            <li>🩺 Doctor Consultation</li>
            <li>💊 Medicine Delivery</li>
          </ul>

        </div>

      </div>

      <div className="hero-right">
        <img src={doctorImage} alt="doctor" />
      </div>
      

    </section>
  );
};

export default Hero;