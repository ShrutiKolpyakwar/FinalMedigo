import "./GetStarted.css";

import { Link } from "react-router-dom";

const GetStarted = () => {

  return (

    <div className="getstarted-page">

      <div className="overlay">

        <div className="getstarted-card">

          <h1>
            Welcome to MediGo
          </h1>

          <p>
            Your healthcare journey begins here.
            Book appointments, manage records,
            and access medical support easily.
          </p>

          <div className="getstarted-buttons">

            <Link to="/login">

              <button className="gs-login">
                Login
              </button>

            </Link>

            <Link to="/signup">

              <button className="gs-signup">
                Signup
              </button>

            </Link>

          </div>

          <Link
            to="/"
            className="back-home"
          >
            ← Back To Home
          </Link>

        </div>

      </div>

    </div>
  );
};

export default GetStarted;