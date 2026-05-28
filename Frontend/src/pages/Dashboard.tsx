import UserImage from "../assets/user.png";
import { useEffect } from "react";
import toast from "react-hot-toast";
const Dashboard = () => {

  const userName =
    localStorage.getItem("userName") || "Rahul";
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
    <div className="h-screen bg-[#eef3ff] flex flex-row overflow-x-hidden md:overflow-hidden overflow-y-auto">

      {/* SIDEBAR */}
      <div className="w-[85px] sm:w-[250px] bg-[#031540] text-white flex flex-col px-2 sm:px-5 py-6 shrink-0 min-h-screen">

        {/* PROFILE */}
        <div className="flex flex-col items-center">

          <img
            src={UserImage}
            alt="user"
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-orange-400"
          />

          <h2 className="hidden sm:block text-4xl font-extrabold mt-4 text-center break-words">
            {userName}
          </h2>

          <p className="hidden sm:block text-slate-300 text-lg mt-1">
            User
          </p>

        </div>

        {/* MENU */}
        <div className="mt-8 space-y-3">

          <button className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all py-3 rounded-2xl text-sm sm:text-lg font-bold">
            Dashboard
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-sm sm:text-lg font-semibold">
            Medical Records
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-sm sm:text-lg font-semibold">
            Appointments
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-sm sm:text-lg font-semibold">
            Prescriptions
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-sm sm:text-lg font-semibold">
            Reports
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-sm sm:text-lg font-semibold">
            Settings
          </button>

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
          className="w-full bg-red-500 hover:bg-red-600 transition-all py-3 rounded-2xl text-sm sm:text-lg font-bold mt-1"
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-2 sm:p-3 md:p-6 min-w-0 md:overflow-hidden overflow-y-auto">

        {/* TOP CARD */}
        <div className="bg-white rounded-[30px] p-4 sm:p-6 shadow-md flex flex-col lg:flex-row items-center justify-between gap-4 overflow-hidden">

          {/* LEFT */}
          <div className="w-full">

            <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-extrabold text-slate-900 leading-tight text-center lg:text-left break-words">
              Welcome {userName} 👋
            </h1>

            <p className="text-slate-500 text-[16px] lg:text-xl mt-3 text-center lg:text-left">
              Manage your healthcare records and appointments easily.
            </p>

          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
            alt="doctor"
            className="w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] object-contain mt-4 lg:mt-0"
          />

        </div>
{/* RECORDS SECTION */}
<div className="bg-white rounded-[30px] shadow-md mt-5 p-4 lg:p-6 overflow-hidden">

  {/* TOP */}
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

    <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 text-center sm:text-left">
      Recent Medical Records
    </h2>

    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-xl font-bold transition-all">
      View All
    </button>

  </div>

  {/* RECORDS */}
  <div className="mt-4 space-y-4">

    {/* RECORD 1 */}
    <div className="bg-[#f4f7ff] rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

      <div>

        <h3 className="text-xl font-bold text-slate-900">
          Blood Test Report
        </h3>

        <p className="text-slate-500 text-base mt-1">
          Uploaded on 15 Jan 2026
        </p>

      </div>

      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-xl font-bold transition-all">
        View
      </button>
    </div>

  </div>

</div>
      </div>

    </div>
  );
};

export default Dashboard;