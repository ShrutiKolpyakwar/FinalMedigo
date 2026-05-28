import UserImage from "../assets/user.png";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Dashboard = () => {

  const userName =
    localStorage.getItem("userName") || "Rahul";

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

    <div className="h-screen bg-[#eef3ff] flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[85px] sm:w-[250px] bg-[#041548] h-screen flex flex-col justify-between py-5 shrink-0">

        <div>

          {/* PROFILE */}
          <div className="flex flex-col items-center">

            <img
              src={UserImage}
              alt="user"
              className="w-14 h-14 sm:w-24 sm:h-24 rounded-full border-4 border-cyan-400 object-cover"
            />

            <h1 className="hidden sm:block text-white text-3xl font-bold mt-4">
              {userName}
            </h1>

            <p className="hidden sm:block text-slate-300 text-base mt-1">
              User
            </p>

          </div>

          {/* MENU */}
          <div className="w-full mt-8 sm:mt-10 flex flex-col gap-4">

            <button className="w-[82%] mx-auto h-[54px] rounded-2xl bg-blue-600 text-white flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px] shadow-md">

              <span className="text-[18px]">
                ⌂
              </span>

              <span className="hidden sm:block">
                Dashboard
              </span>

            </button>

            <button className="w-[82%] mx-auto h-[54px] rounded-2xl bg-[#162544] text-cyan-400 hover:bg-[#22345c] transition-all flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px]">

              <span className="text-[18px]">
                ◈
              </span>

              <span className="hidden sm:block">
                Medical Records
              </span>

            </button>

            <button className="w-[82%] mx-auto h-[54px] rounded-2xl bg-[#162544] text-purple-400 hover:bg-[#22345c] transition-all flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px]">

              <span className="text-[18px]">
                ◉
              </span>

              <span className="hidden sm:block">
                Appointments
              </span>

            </button>

            <button className="w-[82%] mx-auto h-[54px] rounded-2xl bg-[#162544] text-orange-400 hover:bg-[#22345c] transition-all flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px]">

              <span className="text-[18px]">
                ▣
              </span>

              <span className="hidden sm:block">
                Prescriptions
              </span>

            </button>

            <button className="w-[82%] mx-auto h-[54px] rounded-2xl bg-[#162544] text-green-400 hover:bg-[#22345c] transition-all flex items-center justify-center sm:justify-start gap-3 sm:px-5 font-semibold text-[16px]">

              <span className="text-[18px]">
                ◇
              </span>

              <span className="hidden sm:block">
                Reports
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
          className="w-[82%] mx-auto h-[52px] rounded-2xl bg-red-500 hover:bg-red-600 transition-all text-white flex items-center justify-center gap-3 font-semibold text-[16px] mb-4"
        >

          <span className="text-[18px]">
            ↩
          </span>

          <span className="hidden sm:block">
            Logout
          </span>

        </button>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 h-screen overflow-y-auto p-4">

        {/* TOP SECTION */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[30px] shadow-lg p-5 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-white">

          <div className="w-full">

            <h1 className="text-[24px] sm:text-[52px] font-extrabold leading-tight">
              Welcome {userName}
            </h1>

            <p className="text-cyan-100 text-[14px] sm:text-[20px] mt-3 leading-relaxed">
              Manage your healthcare records,
              appointments and reports from
              one simple dashboard.
            </p>

          </div>

          <div className="bg-white/20 rounded-[25px] p-3 sm:p-4 backdrop-blur-md">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
              alt="doctor"
              className="w-[100px] h-[100px] sm:w-[170px] sm:h-[170px] object-contain"
            />

          </div>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">

          <div className="bg-white border-l-[8px] border-blue-500 rounded-[24px] p-6 min-h-[150px] shadow-sm flex flex-col justify-between">

            <h2 className="text-blue-600 text-[20px] font-semibold">
              Medical Records
            </h2>

            <h1 className="text-[55px] font-extrabold text-slate-900">
              120
            </h1>

          </div>

          <div className="bg-white border-l-[8px] border-purple-500 rounded-[24px] p-6 min-h-[150px] shadow-sm flex flex-col justify-between">

            <h2 className="text-purple-600 text-[20px] font-semibold">
              Appointments
            </h2>

            <h1 className="text-[55px] font-extrabold text-slate-900">
              15
            </h1>

          </div>

          <div className="bg-white border-l-[8px] border-orange-400 rounded-[24px] p-6 min-h-[150px] shadow-sm flex flex-col justify-between">

            <h2 className="text-orange-500 text-[20px] font-semibold">
              Prescriptions
            </h2>

            <h1 className="text-[55px] font-extrabold text-slate-900">
              38
            </h1>

          </div>

          <div className="bg-white border-l-[8px] border-cyan-500 rounded-[24px] p-6 min-h-[150px] shadow-sm flex flex-col justify-between">

            <h2 className="text-cyan-700 text-[20px] font-semibold">
              Reports
            </h2>

            <h1 className="text-[55px] font-extrabold text-slate-900">
              24
            </h1>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Dashboard;