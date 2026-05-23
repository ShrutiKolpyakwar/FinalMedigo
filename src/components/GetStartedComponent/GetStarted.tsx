import { Link } from "react-router-dom";

const GetStarted = () => {

  return (

    <div
      className="w-full h-[calc(100vh-85px)] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          `linear-gradient(rgba(15,23,42,0.65), rgba(15,23,42,0.65)), url("/src/assets/medical-bg.jpg")`
      }}
    >

      <div className="w-full h-full bg-black/45 flex justify-center items-center">

        <div className="w-[700px] p-14 rounded-[32px] text-center text-white shadow-[0_12px_35px_rgba(0,0,0,0.30)] backdrop-blur-[18px] bg-[linear-gradient(135deg,rgba(59,130,246,0.28),rgba(255,255,255,0.12))]">

          <h1 className="text-[63px] mb-6 leading-tight text-white drop-shadow-lg font-bold">
            Welcome to MediGo
          </h1>

          <p className="text-2xl leading-[1.7] mb-9 text-slate-100">
            Your healthcare journey begins here.
            Book appointments, manage records,
            and access medical support easily.
          </p>

          <div className="flex justify-center gap-6 mb-6">

            <Link to="/login">

              <button className="w-[120px] h-[61px] rounded-[18px] text-2xl font-bold bg-white text-slate-900 cursor-pointer">
                Login
              </button>

            </Link>

            <Link to="/signup">

              <button className="w-[120px] h-[61px] rounded-[18px] text-2xl font-bold bg-[#c4935c] text-white cursor-pointer">
                Signup
              </button>

            </Link>

          </div>

          <Link
            to="/"
            className="text-white no-underline text-lg font-semibold"
          >
            ← Back To Home
          </Link>

        </div>

      </div>

    </div>
  );
};

export default GetStarted;