import "./ForgotPassword.css";

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

    <div className="forgot-page">

      <div className="forgot-card">

        <h1>Reset Password</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter New Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button type="submit">
            Reset Password
          </button>

        </form>

      </div>

    </div>
  );
};

export default ForgotPassword;