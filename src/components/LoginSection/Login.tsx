import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {

    e.preventDefault();

    if(email === "" || password === ""){

      setError("Please fill all fields");
      return;
    }

    if(password.length < 6){

      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    alert("Login Successful");
  };

  return (

    <div className="login-page">

      <div className="login-right">

        <div className="login-card">

          <h1>Welcome Back!</h1>

          <h2>Login</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            {error && (

              <p className="error-message">
                {error}
              </p>
            )}

            <button type="submit">
              Login
            </button>

          </form>

          <Link
            to="/forgotpassword"
            className="forgot-password"
          >
            Forgot Password?
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;