import Navbar from "./components/NavbarSection/Navbar";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GetStarted from "./components/GetStartedComponent/GetStarted";
import Login from "./components/LoginSection/Login";

import ForgetPassword from "./components/ForgotPasswordSection/ForgetPassword";

import Signup from "./components/SignUpSection/Signup";

function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/Forgotpassword"
          element={<ForgetPassword />}
        />

           <Route
  path="/signup"
  element={<Signup />}
/>
<Route
  path="/getstarted"
  element={<GetStarted />}
/>

      </Routes>

    </>

  );
}

export default App;