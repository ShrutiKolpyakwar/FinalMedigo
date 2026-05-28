import ownerImage from "../assets/owner.png";
import { useEffect } from "react";
import toast from "react-hot-toast";
const ShopOwnerDashboard = () => {

  const ownerName =
    localStorage.getItem("userName") || "Shruti";
      useEffect(() => {
     
       // CREATE 10 HISTORY STATES
       for (let i = 0; i < 100; i++) {
     
         window.history.pushState(
           null,
           "",
           window.location.href
         );
     
       }
     }, []);
  return (
               <div className="h-screen bg-[#f4f6fb] flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[78px] sm:w-[250px] bg-white shadow-md flex flex-col justify-between px-2 sm:px-6 py-6 rounded-r-[35px]">

        <div>

          {/* PROFILE */}
          <div className="flex flex-col items-center">

            <img
              src={ownerImage}
              alt="owner"
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-orange-400"
            />

            <h1 className="hidden sm:block text-3xl font-extrabold text-slate-900 mt-4 text-center break-words">
              {ownerName}
            </h1>

            <p className="hidden sm:block text-slate-500 text-lg mt-1">
              Shop Owner
            </p>

          </div>

          {/* MENU */}
          <div className="mt-8 space-y-3">

            <button className="w-full bg-orange-500 text-white py-3 rounded-2xl text-[11px] sm:text-lg font-bold">
              Dashboard
            </button>

            <button className="w-full hover:bg-orange-50 py-3 rounded-2xl text-[11px] sm:text-lg font-semibold text-slate-700 transition">
              Medicines
            </button>

            <button className="w-full hover:bg-orange-50 py-3 rounded-2xl text-[11px] sm:text-lg font-semibold text-slate-700 transition">
              Orders
            </button>

            <button className="w-full hover:bg-orange-50 py-3 rounded-2xl text-[11px] sm:text-lg font-semibold text-slate-700 transition">
              Customers
            </button>

            <button className="w-full hover:bg-orange-50 py-3 rounded-2xl text-[11px] sm:text-lg font-semibold text-slate-700 transition">
              Revenue
            </button>

            <button className="w-full hover:bg-orange-50 py-3 rounded-2xl text-[11px] sm:text-lg font-semibold text-slate-700 transition">
              Reports
            </button>

            <button className="w-full hover:bg-orange-50 py-3 rounded-2xl text-[11px] sm:text-lg font-semibold text-slate-700 transition">
              Settings
            </button>

          </div>

        </div>

      <button
  onClick={() => {

    toast.success(
      "Logout Successful"
    );

    localStorage.clear();

    setTimeout(() => {

      window.location.href = "/login";

    }, 1000);

  }}
  className="bg-red-500 hover:bg-red-600 text-white px-1 sm:px-6 py-3 rounded-2xl font-bold transition-all mb-10 mx-auto"
>
  Logout
</button>
      </div>

      {/* MAIN CONTENT */}
      
      <div className="flex-1 p-3 lg:p-6 overflow-y-scroll lg:overflow-y-hidden h-screen">

        {/* TOP BAR */}
        <div className="bg-white rounded-[30px] shadow-md min-h-[90px] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-5 gap-4">

          <div className="text-center lg:text-left">

            <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 break-words">
              Welcome {ownerName} 👋
            </h1>

          </div>

          <input
            type="text"
            placeholder="Search medicines, orders..."
            className="w-full lg:w-[320px] h-[50px] bg-[#f4f6fb] rounded-2xl px-5 outline-none text-base lg:text-lg"
          />

        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">

          <div className="bg-white rounded-[28px] shadow-md p-5 min-h-[150px]">

            <div className="flex justify-between items-start">

              <div>

                <h2 className="text-slate-500 text-lg font-semibold">
                  Medicines
                </h2>

                <h1 className="text-5xl font-extrabold text-slate-900 mt-4">
                  520
                </h1>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
                💊
              </div>

            </div>

          </div>

          <div className="bg-white rounded-[28px] shadow-md p-5 min-h-[150px]">

            <div className="flex justify-between items-start">

              <div>

                <h2 className="text-slate-500 text-lg font-semibold">
                  Orders
                </h2>

                <h1 className="text-5xl font-extrabold text-slate-900 mt-4">
                  145
                </h1>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                🛒
              </div>

            </div>

          </div>

          <div className="bg-white rounded-[28px] shadow-md p-5 min-h-[150px]">

            <div className="flex justify-between items-start">

              <div>

                <h2 className="text-slate-500 text-lg font-semibold">
                  Revenue
                </h2>

                <h1 className="text-4xl font-extrabold text-slate-900 mt-4">
                  ₹85K
                </h1>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-3xl">
                💰
              </div>

            </div>

          </div>

          <div className="bg-white rounded-[28px] shadow-md p-5 min-h-[150px]">

            <div className="flex justify-between items-start">

              <div>

                <h2 className="text-slate-500 text-lg font-semibold">
                  Customers
                </h2>

                <h1 className="text-5xl font-extrabold text-slate-900 mt-4">
                  530
                </h1>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-3xl">
                👥
              </div>

            </div>

          </div>

        </div>

        {/* LOWER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-white rounded-[30px] shadow-md p-6">

            <div className="flex justify-between items-center">

              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">
                Medicine Stock
              </h1>

              <button className="bg-orange-500 text-white px-5 py-2 rounded-xl font-bold">
                View All
              </button>

            </div>

            {/* MEDICINE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

              <div className="bg-[#f4f6fb] rounded-2xl p-4 text-center">

                <div className="text-5xl">
                  💊
                </div>

                <h2 className="text-2xl font-bold mt-3">
                  Paracetamol
                </h2>

                <p className="text-slate-500 mt-1">
                  Stock: 220
                </p>

              </div>

              <div className="bg-[#f4f6fb] rounded-2xl p-4 text-center">

                <div className="text-5xl">
                  🩺
                </div>

                <h2 className="text-2xl font-bold mt-3">
                  Syrup
                </h2>

                <p className="text-slate-500 mt-1">
                  Stock: 180
                </p>

              </div>

              <div className="bg-[#f4f6fb] rounded-2xl p-4 text-center">

                <div className="text-5xl">
                  💉
                </div>

                <h2 className="text-2xl font-bold mt-3">
                  Injection
                </h2>

                <p className="text-slate-500 mt-1">
                  Stock: 95
                </p>

              </div>

              <div className="bg-[#f4f6fb] rounded-2xl p-4 text-center">

                <div className="text-5xl">
                  🧴
                </div>

                <h2 className="text-2xl font-bold mt-3">
                  Sanitizer
                </h2>

                <p className="text-slate-500 mt-1">
                  Stock: 75
                </p>

              </div>

              <div className="bg-[#f4f6fb] rounded-2xl p-4 text-center">

                <div className="text-5xl">
                  🩹
                </div>

                <h2 className="text-2xl font-bold mt-3">
                  Bandages
                </h2>

                <p className="text-slate-500 mt-1">
                  Stock: 300
                </p>

              </div>

              <div className="bg-[#f4f6fb] rounded-2xl p-4 text-center">

                <div className="text-5xl">
                  🧪
                </div>

                <h2 className="text-2xl font-bold mt-3">
                  Test Kits
                </h2>

                <p className="text-slate-500 mt-1">
                  Stock: 60
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">

            <div className="bg-white rounded-[30px] shadow-md p-6">

              <h1 className="text-2xl font-extrabold text-slate-900">
                Today Orders
              </h1>

              <div className="mt-5 space-y-4">

                <div className="flex justify-between">
                  <p className="text-lg font-semibold">Order #102</p>
                  <span className="text-green-500 font-bold">
                    Delivered
                  </span>
                </div>

                <div className="flex justify-between">
                  <p className="text-lg font-semibold">Order #104</p>
                  <span className="text-orange-500 font-bold">
                    Pending
                  </span>
                </div>

                <div className="flex justify-between">
                  <p className="text-lg font-semibold">Order #108</p>
                  <span className="text-blue-500 font-bold">
                    Processing
                  </span>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-[30px] shadow-md p-6">

              <h1 className="text-2xl font-extrabold text-slate-900">
                Monthly Revenue
              </h1>

              <h2 className="text-5xl lg:text-6xl font-extrabold text-orange-500 mt-8">
                ₹85K
              </h2>

              <p className="text-green-500 font-bold mt-3 text-lg">
                +12% Growth
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default ShopOwnerDashboard;