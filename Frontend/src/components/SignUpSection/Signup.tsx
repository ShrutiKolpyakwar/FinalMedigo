import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import signupImage from "../../assets/signup.png";
import { signupUser } from "../../api/authApi";

const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {

      setError("Please fill all fields");
      return;

    }
     // ADD HERE
const nameRegex = /^[A-Za-z ]+$/;

if (!nameRegex.test(name)) {

  setError("Name should contain only alphabets");
  return;

}
    if (password.length < 6) {

      setError("Password must be at least 6 characters");
      return;

    }

    if (password !== confirmPassword) {

      setError("Passwords do not match");
      return;

    }

    setError("");

    try {

      const response = await signupUser({
        name,
        email,
        password,
        role,
      });

      console.log(response.data);

      alert("Signup Successful");

      navigate("/login");

    } catch (error: any) {

      console.log("Signup Error:", error);

      setError(
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Signup Failed"
      );

    }
  };

  return (
<div className="w-full min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-200">

  <div className="max-w-[5000px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-10 py-8 lg:py-4 gap-8 pb-32">
      {/* LEFT SECTION */}
<div className="w-full lg:w-1/2 flex flex-col justify-center pt-2 lg:pt-6">

<h1 className="text-[70px] leading-[1] font-extrabold text-slate-900 text-center max-md:text-[42px]">
    Your Health,
    <br />
    Our Priority
  </h1>

  <p className="mt-5 text-[22px] leading-[48px] text-slate-600 max-w-[760px] max-md:text-[18px]">
    Join MediGo to book doctor appointments,
    order medicines, manage prescriptions,
    and access trusted healthcare services
    anytime and anywhere.
  </p>

  <img
    src={signupImage}
    alt="signup"
    className="mt-1 w-[98%] h-[300px] rounded-[30px] object-cover shadow-xl"
  />

</div>

        {/* RIGHT SECTION */}
         <div className="w-full max-w-[520px] pb-50">

          <div className="w-full max-w-[450px] bg-white rounded-[28px] min-h-fit shadow-[0_15px_40px_rgba(0,0,0,0.12)] pt-8 pb-1 px-4 mb-10">

            <h2 className="text-[34px] leading-none font-extrabold text-center text-slate-500 mb-6">
              Signup
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >

              {/* NAME */}
              <input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[48px] rounded-[12px] border border-slate-300 bg-slate-50 px-4 text-[16px] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[48px] rounded-[12px] border border-slate-300 bg-slate-50 px-4 text-[16px] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[48px] rounded-[12px] border border-slate-300 bg-slate-50 px-4 text-[16px] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-[48px] rounded-[12px] border border-slate-300 bg-slate-50 px-4 text-[16px] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
              />

              {/* ERROR */}
              {error && (
                <p className="text-red-500 text-[14px] font-semibold">
                  {error}
                </p>
              )}

              {/* ROLE */}
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full h-[48px] rounded-[12px] border border-slate-300 bg-slate-50 px-4 text-[16px] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
              >

                <option value="user">
                  User
                </option>

                <option value="shopowner">
                  Shop Owner
                </option>

              </select>

              <button
                type="submit"
                className="w-full h-[50px] rounded-[12px] bg-gradient-to-r from-blue-900 to-blue-500 text-white text-[20px] font-bold shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Signup
              </button>

            </form>

            <p className="text-center mt-5 text-[16px] text-slate-700">

              Already have an account?

              <Link
                to="/login"
                className="ml-2 text-blue-700 font-bold hover:underline"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Signup;