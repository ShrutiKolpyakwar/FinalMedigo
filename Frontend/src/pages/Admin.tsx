import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { adminLogin } from "../api/authApi";

const Admin = () => {

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

    setError("");

    try {

      // ADMIN LOGIN API
      const response = await adminLogin({
        email,
        password,
      });

      console.log(response.data);

      // Store Admin Role
      localStorage.setItem(
        "role",
        "admin"
      );

      // Store Admin Name
      localStorage.setItem(
        "userName",
        "Admin"
      );

        toast.success(
         "Admin Login Successful"
      );
        localStorage.setItem(
  "token",
  "admin_token"
);

localStorage.setItem(
  "role",
  "admin"
);

localStorage.setItem(
  "userName",
  "Admin"
);

      navigate("/admin-dashboard");

    } catch (error: any) {

      console.log(error);

      setError(
        error.response?.data?.message ||
        "Invalid Email or Password"
      );

    }

  };

  return (

    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-[450px] bg-white rounded-[32px] shadow-2xl p-8">

        {/* ICON */}
        <div className="flex justify-center">

          <div className="w-24 h-24 rounded-[30px] bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center text-white text-5xl shadow-xl">
            🛡️
          </div>

        </div>

        {/* TITLE */}
        <h1 className="text-[42px] font-extrabold text-center text-slate-800 mt-6">
          Admin Login
        </h1>

        <p className="text-center text-slate-500 mt-2 text-[17px]">
          Secure access to admin dashboard
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 mt-8"
        >

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full h-[55px] rounded-[16px] border border-slate-300 bg-slate-50 px-5 text-[17px] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full h-[55px] rounded-[16px] border border-slate-300 bg-slate-50 px-5 text-[17px] outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
          />

          {/* ERROR */}
          {error && (

            <p className="text-red-500 text-[15px] font-semibold">
              {error}
            </p>

          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full h-[55px] rounded-[16px] bg-gradient-to-r from-blue-700 to-cyan-500 text-white text-[20px] font-bold shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );

};

export default Admin;