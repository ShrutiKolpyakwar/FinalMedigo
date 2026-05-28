import AdminImage from "../assets/admin.png";

import { useEffect } from "react";

import toast from "react-hot-toast";

import {
  FiGrid,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiPackage,
  FiLogOut,
} from "react-icons/fi";

const AdminDashboard = () => {

  useEffect(() => {

    for (let i = 0; i < 100; i++) {

      window.history.pushState(
        null,
        "",
        window.location.href
      );

    }

  }, []);

  return (

    <div className="min-h-screen bg-[#f8fafc] flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[82px] sm:w-[250px] bg-[#0f172a] flex flex-col items-center py-4 sm:py-7 px-2 pb-8 shrink-0">

        {/* PROFILE */}
        <div className="flex flex-col items-center">

          <img
            src={AdminImage}
            alt="admin"
            className="w-14 h-14 sm:w-24 sm:h-24 rounded-full border-4 border-blue-500 object-cover"
          />

          <h1 className="hidden sm:block text-white text-3xl font-bold mt-4">
            Admin
          </h1>

          <p className="hidden sm:block text-slate-300 text-base mt-1">
            Hospital Admin
          </p>

        </div>

        {/* MENU */}
        <div className="w-full mt-8 sm:mt-10 flex flex-col gap-4">

          {/* DASHBOARD */}
          <button className="w-[90%] mx-auto h-[46px] rounded-xl bg-blue-600 text-white flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[15px]">

            <FiGrid size={18} />

            <span className="hidden sm:block">
              Dashboard
            </span>

          </button>

          {/* DOCTORS */}
          <button className="w-[90%] mx-auto h-[46px] rounded-xl bg-[#1e293b] text-[#38bdf8] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[15px]">

            <FiUsers size={18} />

            <span className="hidden sm:block">
              Doctors
            </span>

          </button>

          {/* PATIENTS */}
          <button className="w-[90%] mx-auto h-[46px] rounded-xl bg-[#1e293b] text-[#22c55e] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[15px]">

            <FiUsers size={18} />

            <span className="hidden sm:block">
              Patients
            </span>

          </button>

          {/* APPOINTMENTS */}
          <button className="w-[90%] mx-auto h-[46px] rounded-xl bg-[#1e293b] text-[#f59e0b] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[15px]">

            <FiCalendar size={18} />

            <span className="hidden sm:block">
              Appointments
            </span>

          </button>

          {/* REPORTS */}
          <button className="w-[90%] mx-auto h-[46px] rounded-xl bg-[#1e293b] text-[#8b5cf6] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[15px]">

            <FiFileText size={18} />

            <span className="hidden sm:block">
              Reports
            </span>

          </button>

          {/* MEDICINES */}
          <button className="w-[90%] mx-auto h-[46px] rounded-xl bg-[#1e293b] text-[#06b6d4] flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[15px]">

            <FiPackage size={18} />

            <span className="hidden sm:block">
              Medicines
            </span>

          </button>

        </div>

        {/* LOGOUT */}
        <button
          onClick={() => {

            toast.success(
              "Admin Logout Successful"
            );

            localStorage.clear();

            setTimeout(() => {

              window.location.href = "/login";

            }, 1000);

          }}
className="w-[90%] mx-auto h-[46px] rounded-xl bg-red-500 text-white flex items-center justify-center gap-3 font-semibold text-[15px] mt-auto mb-3"          
        >

          <FiLogOut size={18} />

          <span className="hidden sm:block">
            Logout
          </span>

        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-3 sm:p-7 h-screen overflow-y-scroll sm:overflow-hidden">

        {/* TOP CARD */}
         <div className="bg-white rounded-[24px] shadow-sm p-4 sm:p-8 overflow-hidden">

          <h1 className="text-[24px] sm:text-[40px] lg:text-[48px] font-bold text-slate-900 leading-tight break-words">

            Admin Dashboard

          </h1>

          <p className="text-slate-500 text-[15px] sm:text-[18px] mt-4 leading-7 max-w-[700px]">

            Manage hospital records, appointments
            and reports from one clean dashboard.

          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">

          {/* CARD */}
          <div className="bg-[#eff6ff] rounded-[24px] p-6 shadow-sm">

            <p className="text-[#2563eb] text-[18px] font-semibold">
              Patients
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mt-5">
              800
            </h1>

          </div>

          {/* CARD */}
          <div className="bg-[#f0fdf4] rounded-[24px] p-6 shadow-sm">

            <p className="text-[#16a34a] text-[18px] font-semibold">
              Doctors
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mt-5">
              350
            </h1>

          </div>

          {/* CARD */}
          <div className="bg-[#faf5ff] rounded-[24px] p-6 shadow-sm">

            <p className="text-[#9333ea] text-[18px] font-semibold">
              Reports
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mt-5">
              980
            </h1>

          </div>

          {/* CARD */}
          <div className="bg-[#fef3c7] rounded-[24px] p-6 shadow-sm">

            <p className="text-[#d97706] text-[18px] font-semibold">
              Revenue
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mt-5">
              ₹98K
            </h1>

          </div>

        </div>

        {/* APPOINTMENTS BOX */}
        <div className="flex justify-center mt-8 mb-6">

          <div className="w-full max-w-[700px] bg-white rounded-[26px] p-6 sm:p-8 shadow-sm">

            <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-900">

              Recent Appointments

            </h1>

            <div className="space-y-6 mt-10">

              {/* APPOINTMENT */}
              <div className="flex justify-between items-center border-b border-slate-100 pb-5">

                <div>

                  <h1 className="text-lg sm:text-xl font-semibold text-slate-800">
                    Rahul Sharma
                  </h1>

                  <p className="text-slate-500 mt-1">
                    Heart Checkup
                  </p>

                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all">

                  View

                </button>

              </div>

              {/* APPOINTMENT */}
              <div className="flex justify-between items-center border-b border-slate-100 pb-5">

                <div>

                  <h1 className="text-lg sm:text-xl font-semibold text-slate-800">
                    Priya Mehta
                  </h1>

                  <p className="text-slate-500 mt-1">
                    Dental Checkup
                  </p>

                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all">

                  View

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AdminDashboard;