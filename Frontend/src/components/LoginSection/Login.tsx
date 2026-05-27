import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import loginImage from "../../assets/login.png";

import { loginUser } from "../../api/authApi";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    // Validation
    if (email === "" || password === "") {

      setError("Please fill all fields");
      return;

    }

    if (password.length < 6) {

      setError(
        "Password must be at least 6 characters"
      );

      return;

    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

    if (!passwordRegex.test(password)) {

      setError(
        "Password must contain uppercase, lowercase, number and special character"
      );

      return;

    }

    setError("");

    try {

      const response = await loginUser({
        email,
        password,
      });

      console.log(
        "FULL RESPONSE:",
        response.data
      );

      // Store Token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Store User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Store Role
      localStorage.setItem(
        "role",
        response.data.user.role
      );

      // Store Username
      localStorage.setItem(
        "userName",
        response.data.user.name
      );

      alert("Login Successful");

      // Get Role
      const role =
        response.data.user?.role;

      console.log("ROLE:", role);

      if (role === "admin") {

        navigate("/admin-dashboard");

      }
      else if (
        role === "shopowner"
      ) {

        navigate("/shop-dashboard");

      }
      else if (role === "user") {

        navigate("/dashboard");

      }
      else {

        console.log("Role Not Found");

        setError(
          "Role not found. Please signup again."
        );

      }

    } catch (error: any) {

      console.log(
        "LOGIN ERROR:",
        error
      );

      setError(
        "Invalid Email or Password"
      );

    }

  };

  return (

    <div
      className="w-full min-h-[calc(100vh-85px)] flex justify-end items-center pr-[120px] bg-cover bg-center bg-no-repeat max-lg:justify-center max-lg:p-5 max-md:pt-[120px] max-sm:min-h-screen max-sm:px-[15px] max-sm:pb-[30px]"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${loginImage})`
      }}
    >

      <div className="flex justify-end items-center w-full max-lg:justify-center">

        <div className="w-[420px] px-10 py-[50px] rounded-[28px] bg-[rgba(255,255,255,0.18)] backdrop-blur-[18px] border border-[rgba(255,255,255,0.25)] shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-center max-lg:w-[90%] max-lg:max-w-[420px] max-lg:px-5 max-lg:py-[30px] max-sm:w-full max-sm:rounded-[25px] max-sm:px-[15px] max-sm:py-[25px]">

          <h1 className="text-[54px] leading-[1.1] mb-[25px] font-bold text-white max-md:text-[52px] max-md:leading-[60px] max-sm:text-[42px] max-sm:leading-[48px]">
            Welcome Back!
          </h1>

          <h2 className="text-[30px] mb-[30px] mt-5 text-black max-md:text-[36px] max-sm:text-[30px]">
            Login
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[25px]"
          >

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="h-[58px] border-none rounded-[14px] pl-[18px] text-[18px] outline-none bg-[rgba(255,255,255,0.92)] max-md:w-full max-md:h-[60px] max-md:text-[20px] max-sm:h-[55px] max-sm:text-[18px] max-sm:pl-[15px]"
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="h-[58px] border-none rounded-[14px] pl-[18px] text-[18px] outline-none bg-[rgba(255,255,255,0.92)] max-md:w-full max-md:h-[60px] max-md:text-[20px] max-sm:h-[55px] max-sm:text-[18px] max-sm:pl-[15px]"
            />

            {error && (

              <p className="text-[#ff4d4d] text-[16px] font-semibold -mt-[10px]">
                {error}
              </p>

            )}

            <button
              type="submit"
              className="w-[180px] h-[62px] mx-auto border-none rounded-[14px] bg-[#081c45] text-white text-[32px] font-bold cursor-pointer transition duration-300 hover:-translate-y-[3px] hover:opacity-95 max-md:w-[220px] max-md:h-[65px] max-md:text-[22px] max-sm:w-[180px] max-sm:h-[55px] max-sm:text-[20px]"
            >
              Login
            </button>

          </form>

          <Link
            to="/forgotpassword"
            className="mt-[25px] inline-block no-underline text-white text-[18px] font-semibold max-sm:text-[20px]"
          >
            Forgot Password?
          </Link>

        </div>

      </div>

    </div>

  );

};

export default Login;