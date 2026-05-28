import ownerImage from "../assets/owner.png";
import { useEffect } from "react";
import toast from "react-hot-toast";

import {
  FiGrid,
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";



const ShopOwnerDashboard = () => {

  useEffect(() => {
  
      for (let i = 0; i < 100; i++) {
  
        window.history.pushState(
          null,
          "",
          window.location.href
        );
  
      }
  
    }, []);

  const ownerName =
    localStorage.getItem("userName") || "Rohit";

  return (

    <div className="min-h-screen h-screen bg-[#f1f5f9] flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[80px] sm:w-[230px] bg-[#0f172a] flex flex-col items-center py-4 sm:py-7 px-2 pb-8">

        {/* TOP */}
        <div className="w-full flex flex-col items-center">

          {/* IMAGE */}
          <img
            src={ownerImage}
            alt="owner"
            className="w-14 h-14 sm:w-24 sm:h-24 rounded-full border-4 border-blue-500 object-cover"
          />

          {/* NAME */}
          <h1 className="hidden sm:block text-white text-3xl font-bold mt-4">
            {ownerName}
          </h1>

          <p className="hidden sm:block text-slate-300 text-base mt-1">
            Shop Owner
          </p>

          {/* MENU */}
          <div className="w-full mt-8 flex flex-col gap-4">

            {/* DASHBOARD */}
           <button className="w-[80%] mx-auto h-[52px] rounded-xl bg-[#1e293b] text-[#38bdf8] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px]">
              <FiGrid size={20} />

              <span className="hidden sm:block">
                Dashboard
              </span>

            </button>

            {/* MEDICINES */}
            <button className="w-[80%] mx-auto h-[52px] rounded-xl bg-[#1e293b] text-[#38bdf8] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px]">

              <FiPackage size={20} />

              <span className="hidden sm:block">
                Medicines
              </span>

            </button>

            {/* ORDERS */}
            <button className="w-[80%] mx-auto h-[52px] rounded-xl bg-[#1e293b] text-[#8b5cf6] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px]">

              <FiShoppingCart size={20} />

              <span className="hidden sm:block">
                Orders
              </span>

            </button>

            {/* CUSTOMERS */}
            <button className="w-[80%] mx-auto h-[52px] rounded-xl bg-[#1e293b] text-[#14b8a6] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px]">

              <FiUsers size={20} />

              <span className="hidden sm:block">
                Customers
              </span>

            </button>

            {/* SETTINGS */}
            <button className="w-[80%] mx-auto h-[52px] rounded-xl bg-[#1e293b] text-[#f59e0b] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px]">

              <FiSettings size={20} />

              <span className="hidden sm:block">
                Settings
              </span>

            </button>

          </div>

        </div>

        {/* LOGOUT */}
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
         className="w-[80%] mx-auto h-[50px] rounded-xl bg-red-500 text-white flex items-center justify-center gap-3 font-semibold text-[16px] mt-10 mb-4 sm:mt-auto"
        >

          <FiLogOut size={20} />

          <span className="hidden sm:block">
            Logout
          </span>

        </button>

      </div>

      <div className="flex-1 p-3 sm:p-7 h-screen overflow-y-scroll sm:overflow-hidden">

        {/* TOP CARD */}
        <div className="bg-white rounded-[24px] shadow-sm p-5 sm:p-8">

          <h1 className="text-[30px] sm:text-[48px] font-bold text-slate-900">

            Welcome {ownerName}

          </h1>

          <p className="text-slate-500 text-[15px] sm:text-[18px] mt-4 leading-7 max-w-[700px]">

            Manage medicines, customer orders and
            revenue from one simple and clean dashboard.

          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">

          {/* CARD */}
          <div className="bg-[#eff6ff] rounded-[24px] p-6">

            <p className="text-blue-600 text-[20px] font-semibold">
              Medicines
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mt-5">
              520
            </h1>

          </div>

          {/* CARD */}
          <div className="bg-[#f5f3ff] rounded-[24px] p-6">

            <p className="text-violet-600 text-[20px] font-semibold">
              Orders
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mt-5">
              145
            </h1>

          </div>

          {/* CARD */}
          <div className="bg-[#fef3c7] rounded-[24px] p-6">

            <p className="text-amber-600 text-[20px] font-semibold">
              Revenue
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mt-5">
              ₹85K
            </h1>

          </div>

          {/* CARD */}
          <div className="bg-[#ecfeff] rounded-[24px] p-6">

            <p className="text-cyan-700 text-[20px] font-semibold">
              Customers
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mt-5">
              530
            </h1>

          </div>

        </div>

        {/* ORDERS BOX */}
        <div className="flex justify-center mt-8">

          <div className="w-full max-w-[700px] bg-white rounded-[26px] p-6 sm:p-8 shadow-sm">

            <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-900">

              Today Orders

            </h1>

            <div className="space-y-6 mt-10">

              <div className="flex justify-between items-center">

                <p className="text-lg sm:text-xl font-semibold text-slate-800">
                  Order #102
                </p>

                <span className="text-green-500 font-bold">
                  Delivered
                </span>

              </div>

              <div className="flex justify-between items-center">

                <p className="text-lg sm:text-xl font-semibold text-slate-800">
                  Order #104
                </p>

                <span className="text-orange-500 font-bold">
                  Pending
                </span>

              </div>

              <div className="flex justify-between items-center">

                <p className="text-lg sm:text-xl font-semibold text-slate-800">
                  Order #108
                </p>

                <span className="text-blue-500 font-bold">
                  Processing
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ShopOwnerDashboard;