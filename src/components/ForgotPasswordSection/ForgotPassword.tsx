import { useState } from "react";

const ForgotPassword = () => {

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

    alert("Password Reset Successful");
  };

  return (

    <div className="w-full min-h-[calc(100vh-85px)] flex justify-center items-center bg-[#dff4ff]">

      <div className="w-[420px] bg-white p-11 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] text-center">

        <h1 className="mb-8 text-4xl font-bold text-slate-900">
          Reset Password
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="h-[55px] border border-gray-300 rounded-xl pl-4 text-base outline-none"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="h-[55px] border border-gray-300 rounded-xl pl-4 text-base outline-none"
          />

          <input
            type="password"
            placeholder="Enter New Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="h-[55px] border border-gray-300 rounded-xl pl-4 text-base outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            className="h-[55px] border border-gray-300 rounded-xl pl-4 text-base outline-none"
          />

          {error && (
            <p className="text-red-500 text-sm font-semibold -mt-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="h-[55px] rounded-xl bg-slate-900 text-white text-lg font-bold cursor-pointer hover:bg-slate-800 transition"
          >
            Reset Password
          </button>

        </form>

      </div>

    </div>
  );
};

export default ForgotPassword;