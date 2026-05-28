// import Hero from "../components/HeroSection/Hero";

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//     </div>
//   );
// };

// export default Home;

// import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";

// import Hero from "../components/HeroSection/Hero";

// const Home = () => {

//   const navigate = useNavigate();

//   useEffect(() => {

//     const token =
//       localStorage.getItem("token");

//     const role =
//       localStorage.getItem("role");

//     if (token) {

//       if (role === "admin") {

//         navigate(
//           "/admin-dashboard",
//           { replace: true }
//         );

//       }
//       else if (
//         role === "shopowner"
//       ) {

//         navigate(
//           "/shop-dashboard",
//           { replace: true }
//         );

//       }
//       else {

//         navigate(
//           "/dashboard",
//           { replace: true }
//         );

//       }

//     }

//   }, []);

//   return (

//     <div>
//       <Hero />
//     </div>

//   );

// };

// export default Home;\

import Hero from "../components/HeroSection/Hero";

const Home = () => {

  return (

    <div>
      <Hero />
    </div>

  );

};

export default Home;