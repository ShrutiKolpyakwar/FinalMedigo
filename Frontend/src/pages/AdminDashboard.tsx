import AdminImage from "../assets/admin.png";
import { useEffect } from "react";
import toast from "react-hot-toast";
const AdminDashboard = () => {
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
    <div className="w-full h-screen bg-[#edf2ff] flex flex-col lg:flex-row lg:overflow-hidden overflow-y-scroll overflow-x-hidden">

      {/* SIDEBAR */}
      <div className="w-full lg:w-[260px] bg-[#071b52] text-white flex flex-col justify-between px-5 py-6 lg:min-h-screen">

        <div>

          {/* PROFILE */}
          <div className="flex flex-col items-center">

            <img
              src={AdminImage}
              alt="admin"
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-orange-400"
            />

            <h1 className="text-[30px] font-bold mt-4">
              Admin
            </h1>

            <p className="text-slate-300 text-[16px]">
              Hospital Admin
            </p>

          </div>

          {/* MENU */}
          <div className="mt-10 flex flex-col gap-4">

            <button className="w-full h-[52px] bg-cyan-500 rounded-xl text-left px-5 font-semibold text-[17px]">
              Dashboard
            </button>

            <button className="w-full h-[52px] hover:bg-[#102865] rounded-xl text-left px-5 font-semibold text-[17px] transition-all">
              Doctors
            </button>

            <button className="w-full h-[52px] hover:bg-[#102865] rounded-xl text-left px-5 font-semibold text-[17px] transition-all">
              Patients
            </button>

            <button className="w-full h-[52px] hover:bg-[#102865] rounded-xl text-left px-5 font-semibold text-[17px] transition-all">
              Appointments
            </button>

            <button className="w-full h-[52px] hover:bg-[#102865] rounded-xl text-left px-5 font-semibold text-[17px] transition-all">
              Reports
            </button>

            <button className="w-full h-[52px] hover:bg-[#102865] rounded-xl text-left px-5 font-semibold text-[17px] transition-all">
              Medicines
            </button>

          </div>

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
          className="w-full h-[55px] bg-red-500 hover:bg-red-600 rounded-xl font-bold text-[18px] transition-all mt-10"
        >
          Logout
        </button>

      </div>

      {/* RIGHT SIDE */}
     <div className="flex-1 p-5 lg:overflow-hidden overflow-visible">

        {/* TOP BOX */}
        <div className="w-full rounded-[30px] bg-gradient-to-r from-blue-700 to-cyan-500 flex flex-col lg:flex-row items-center justify-between px-5 lg:px-10 py-6 shadow-xl relative gap-5 overflow-hidden">

          {/* LEFT */}
          <div className="w-full">

            <h1 className="text-white text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold mt-2 text-center lg:text-left">
              Admin Dashboard
            </h1>

            <p className="text-cyan-100 text-[15px] sm:text-[18px] mt-2 text-center lg:text-left">
              Manage hospital records and activities
            </p>

            {/* SMALL CARDS */}
            <div className="relative lg:absolute lg:right-[270px] lg:bottom-5 flex gap-3 sm:gap-5 mt-5 justify-center flex-wrap">

              <div className="w-[120px] h-[70px] rounded-2xl bg-white/20 backdrop-blur-md flex flex-col justify-center items-center">

                <h1 className="text-white text-[28px] font-bold">
                  35
                </h1>

                <p className="text-white text-[15px]">
                  Doctors
                </p>

              </div>

              <div className="w-[120px] h-[70px] rounded-2xl bg-white/20 backdrop-blur-md flex flex-col justify-center items-center">

                <h1 className="text-white text-[28px] font-bold">
                  48
                </h1>

                <p className="text-white text-[15px]">
                  Reports
                </p>

              </div>

            </div>

          </div>

          {/* IMAGE */}
          <div className="flex items-center justify-center gap-6 w-full lg:w-auto">

            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-3 sm:p-5">

              <img
                src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
                alt="doctor"
                className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px] object-contain"
              />

            </div>

          </div>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">

          <div className="bg-white rounded-[25px] p-5 shadow-md min-h-[135px] flex flex-col justify-center">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mx-auto">
              👨‍⚕️
            </div>

            <h1 className="text-[34px] font-bold text-slate-800 mt-4 text-center">
              800
            </h1>

            <p className="text-slate-500 text-[16px] text-center">
              Patients
            </p>

          </div>

          <div className="bg-white rounded-[25px] p-5 shadow-md min-h-[135px] flex flex-col justify-center">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mx-auto">
              🩺
            </div>

            <h1 className="text-[34px] font-bold text-slate-800 mt-4 text-center">
              350
            </h1>

            <p className="text-slate-500 text-[16px] text-center">
              Doctors
            </p>

          </div>

          <div className="bg-white rounded-[25px] p-5 shadow-md min-h-[135px] flex flex-col justify-center">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mx-auto">
              📄
            </div>

            <h1 className="text-[34px] font-bold text-slate-800 mt-4 text-center">
              980
            </h1>

            <p className="text-slate-500 text-[16px] text-center">
              Reports
            </p>

          </div>

          <div className="bg-white rounded-[25px] p-5 shadow-md min-h-[135px] flex flex-col justify-center">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mx-auto">
              💰
            </div>

            <h1 className="text-[34px] font-bold text-slate-800 mt-4 text-center">
              ₹98K
            </h1>

            <p className="text-slate-500 text-[16px] text-center">
              Revenue
            </p>

          </div>

        </div>

        {/* CENTER BOX */}
        <div className="w-full flex justify-center mt-6 mb-6">

          <div className="w-full lg:w-[550px] bg-white rounded-[25px] p-4 sm:p-5 shadow-md">

            <h1 className="text-[28px] sm:text-[40px] lg:text-[50px] font-bold text-slate-800 text-center">
              Recent Appointments
            </h1>

            <div className="mt-5 flex flex-col gap-4">

              <div className="w-full min-h-[60px] rounded-xl bg-slate-100 flex items-center justify-between px-3 sm:px-5 py-3 gap-3">

                <div>
                  <h1 className="font-bold text-[18px]">
                    Rahul Sharma
                  </h1>

                  <p className="text-slate-500 text-[16px]">
                    Heart Checkup
                  </p>
                </div>

                <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg">
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