const Dashboard = () => {

  const userName = localStorage.getItem("userName") || "Rahul";

  return (

    <div className="h-screen bg-[#eef3ff] flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-[#031540] text-white flex flex-col px-5 py-6">

        {/* PROFILE */}
        <div className="flex flex-col items-center">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover"
          />

          <h2 className="text-4xl font-extrabold mt-4">
            {userName}
          </h2>

          <p className="text-slate-300 text-lg mt-1">
            Patient
          </p>

        </div>

        {/* MENU */}
        <div className="mt-8 space-y-3 flex-1">

          <button className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all py-3 rounded-2xl text-lg font-bold">
            Dashboard
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-lg font-semibold">
            Medical Records
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-lg font-semibold">
            Appointments
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-lg font-semibold">
            Prescriptions
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-lg font-semibold">
            Reports
          </button>

          <button className="w-full hover:bg-[#10224d] transition-all py-3 rounded-2xl text-lg font-semibold">
            Settings
          </button>

        </div>

        {/* LOGOUT */}
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          className="w-full bg-red-500 hover:bg-red-600 transition-all py-3 rounded-2xl text-lg font-bold mt-4"
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-5 overflow-hidden">

        {/* TOP CARD */}
        <div className="bg-white rounded-[30px] shadow-md h-[210px] flex items-center justify-between px-8 overflow-hidden">

          {/* LEFT */}
          <div>

            <h1 className="text-[52px] font-extrabold text-slate-900 leading-tight">
              Welcome {userName} 👋
            </h1>

            <p className="text-slate-500 text-xl mt-3">
              Manage your healthcare records and appointments easily.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
            alt="doctor"
            className="w-[220px] h-[220px] object-contain"
          />

        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-5 mt-5">

          {/* CARD 1 */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[28px] p-6 text-white shadow-lg h-[150px]">

            <h2 className="text-2xl font-bold">
              Medical Records
            </h2>

            <h1 className="text-6xl font-extrabold mt-3">
              12
            </h1>

          </div>

          {/* CARD 2 */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-[28px] p-6 text-white shadow-lg h-[150px]">

            <h2 className="text-2xl font-bold">
              Appointments
            </h2>

            <h1 className="text-6xl font-extrabold mt-3">
              05
            </h1>

          </div>

          {/* CARD 3 */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-[28px] p-6 text-white shadow-lg h-[150px]">

            <h2 className="text-2xl font-bold">
              Reports
            </h2>

            <h1 className="text-6xl font-extrabold mt-3">
              08
            </h1>

          </div>

        </div>

        {/* RECORDS SECTION */}
       <div className="bg-white rounded-[30px] shadow-md mt-5 p-6 h-[280px] overflow-hidden">

          {/* TOP */}
          <div className="flex justify-between items-center">

            <h2 className="text-3xl font-extrabold text-slate-900">
              Recent Medical Records
            </h2>

            <button className="bg-cyan-500 text-white px-5 py-2 rounded-xl font-bold">
              View All
            </button>

          </div>

          {/* RECORDS */}
          <div className="mt-4 space-y-3">

            {/* RECORD 1 */}
            <div className="bg-[#f4f7ff] rounded-2xl p-4 flex justify-between items-center">

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  Blood Test Report
                </h3>

                <p className="text-slate-500 text-base mt-1">
                  Uploaded on 15 Jan 2026
                </p>

              </div>

              <button className="bg-cyan-500 text-white px-5 py-2 rounded-xl font-bold">
                View
              </button>

            </div>

            {/* RECORD 2 */}
            <div className="bg-[#f4f7ff] rounded-2xl p-4 flex justify-between items-center">

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  Heart Checkup
                </h3>

                <p className="text-slate-500 text-base mt-1">
                  Uploaded on 10 Jan 2026
                </p>

              </div>

              <button className="bg-cyan-500 text-white px-5 py-2 rounded-xl font-bold">
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