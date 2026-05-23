import { Link } from "react-router-dom";
import { useState } from "react";
import signupImage from "../../assets/signup.png";

const Signup = () => {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e:any) => {

    e.preventDefault();

    if(
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ){

      setError("Please fill all fields");

      return;
    }

    if(password.length < 6){

      setError("Password must be at least 6 characters");

      return;
    }

    if(password !== confirmPassword){

      setError("Passwords do not match");

      return;
    }

    setError("");

    alert("Signup Successful");
  };

  return (

    <div className="w-full h-[calc(100vh-85px)] flex overflow-hidden bg-[#eaf8ff] max-md:flex-col max-md:h-auto max-md:overflow-auto">

      {/* LEFT SECTION */}
      <div className="w-[58%] px-[55px] py-[35px] flex flex-col max-md:w-full max-md:p-[25px]">

        <h1 className="text-[40px] leading-none text-slate-900 mb-[22px] font-extrabold max-md:text-[40px]">
          Start Your Health Journey
        </h1>

        <p className="text-[20px] leading-[1.5] text-slate-600 mb-[28px] max-w-[900px] max-md:text-[18px]">
          Create your MediGo account to book appointments, track medical records, and access healthcare support.
        </p>

        <img
          src={signupImage}
          alt="medical"
          className="w-[110%] h-[600px] object-cover rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] max-md:h-auto"
        />

      </div>

      {/* RIGHT SECTION */}
      <div className="w-[42%] flex justify-center items-center p-[30px] bg-[linear-gradient(135deg,#dff6ff,#c7f0ff,#eef9ff)] max-md:w-full">

        <div className="w-[490px] px-[45px] py-[35px] rounded-[30px] bg-[rgba(28, 26, 26, 0.28)] backdrop-blur-[18px] border border-[rgba(255,255,255,0.35)] shadow-[0_12px_35px_rgba(0,0,0,0.18)] text-center max-md:w-full max-md:max-w-[420px]">

        <h2 className="text-[52px] text-black font-bold mb-[25px] max-md:text-[42px]">
            Signup
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            <input
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="h-[62px] w-[85%] border-none rounded-[16px] pl-5 text-[20px] outline-none bg-[rgba(255,255,255,0.88)] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="h-[62px] w-[85%] border-none rounded-[16px] pl-5 text-[20px] outline-none bg-[rgba(255,255,255,0.88)] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="h-[62px] w-[85%] border-none rounded-[16px] pl-5 text-[20px] outline-none bg-[rgba(255,255,255,0.88)] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="h-[62px] w-[85%] border-none rounded-[16px] pl-5 text-[20px] outline-none bg-[rgba(255,255,255,0.88)] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
            />

            {error && (
              <p className="text-red-500 text-[15px] font-semibold">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-[210px] h-[58px] mx-auto border-none rounded-[14px] bg-[linear-gradient(135deg,#0f172a,#2563eb)] text-white text-[30px] font-bold cursor-pointer"
            >
              Signup
            </button>

          </form>

          <p className="mt-6 text-[18px]">

            Already have an account?

            <Link
              to="/login"
              className="ml-2 no-underline text-blue-600 font-bold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;