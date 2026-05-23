import "./Signup.css";

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

    <div className="signup-page">

    <div className="signup-left">

  <h1>
    Start Your Health Journey
  </h1>

  <p>
    Create your MediGo account to book appointments, track medical records, and access healthcare support.
  </p>

  <img
    src={signupImage}
    alt="medical"
  />

</div>
      <div className="signup-right">

        <div className="signup-card">

          <h2>Signup</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Enter Full Name"
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
              placeholder="Enter Password"
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
              Signup
            </button>

          </form>

          <p className="login-text">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;