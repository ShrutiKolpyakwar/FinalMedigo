const AdminDashboard = () => {

  return (

    <div className="w-full h-screen bg-[#edf2ff] flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[260px] bg-[#071b52] text-white flex flex-col justify-between px-5 py-6">

        <div>

          {/* PROFILE */}
          <div className="flex flex-col items-center">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="admin"
              className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover"
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

            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("userName");

            window.location.href =
              "/medigo-super-secure-admin-panel-2026";

          }}
          className="w-full h-[55px] bg-red-500 hover:bg-red-600 rounded-xl font-bold text-[18px] transition-all"
        >
          Logout
        </button>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 p-5 overflow-hidden">

        {/* TOP BOX */}
      <div className="w-full h-[210px] rounded-[30px] bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-between px-10 shadow-xl overflow-hidden relative">

          {/* LEFT */}
          <div>

           <div className="flex gap-4 mt-5"></div>
            <h1 className="text-white text-[48px] font-extrabold mt-2">
              Admin Dashboard
            </h1>

            <p className="text-cyan-100 text-[18px] mt-2">
              Manage hospital records and activities
            </p>

            <div className="absolute right-[270px] bottom-5 flex gap-5">

              <div className="w-[120px] h-[70px] rounded-2xl bg-white/20 backdrop-blur-md flex flex-col justify-center items-center">

                <h1 className="text-white text-[28px] font-bold">
                  120
                </h1>

                <p className="text-white text-[15px]">
                  Patients
                </p>

              </div>

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

        <div className="flex items-center gap-6">

  <div className="bg-white/20 backdrop-blur-md rounded-3xl p-5">

    <img
      src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
      alt="doctor"
      className="w-[180px] h-[180px] object-contain"
    />

  </div>

</div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-4 mt-4">

           <div className="bg-white rounded-[25px] p-5 shadow-md h-[135px] flex flex-col justify-center">

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

          <div className="bg-white rounded-[25px] p-5 shadow-md h-[135px] flex flex-col justify-center">

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

          <div className="bg-white rounded-[25px] p-5 shadow-md h-[135px] flex flex-col justify-center">

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

         <div className="bg-white rounded-[25px] p-5 shadow-md h-[135px] flex flex-col justify-center">

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

        {/* BOTTOM */}
        <div className="grid grid-cols-2 gap-5 mt-5 h-[240px]">

          {/* LEFT */}
          <div className="bg-white rounded-[25px] p-5 shadow-md">

            <h1 className="text-[50px] font-bold text-slate-800">
              Recent Appointments
            </h1>

            <div className="mt-5 flex flex-col gap-4">

              <div className="w-full h-[60px] rounded-xl bg-slate-100 flex items-center justify-between px-5">

                <div>
                  <h1 className="font-bold text-[18px]">
                    Rahul Sharma
                  </h1>

                  <p className="text-slate-500 text-[16px] text-center">
                    Heart Checkup
                  </p>
                </div>

                <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg">
                  View
                </button>

              </div>

              <div className="w-full h-[60px] rounded-xl bg-slate-100 flex items-center justify-between px-5">

                <div>
                  <h1 className="font-bold text-[18px]">
                    Priya Singh
                  </h1>

                  <p className="text-slate-500 text-[16px] text-center">
                    Blood Test
                  </p>
                </div>

                <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg">
                  View
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-[25px] p-5 shadow-md">

            <h1 className="text-[50px] font-bold text-slate-800">
              System Overview
            </h1>

            <div className="flex flex-col justify-center h-full pb-5">

              <div>

                <div className="flex justify-between mb-2">
                  <span className="font-semibold">
                    Bed Occupancy
                  </span>

                  <span className="font-bold">
                    75%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-200 rounded-full">

                  <div className="w-[75%] h-3 bg-cyan-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span className="font-semibold">
                    Medicine Stock
                  </span>

                  <span className="font-bold">
                    60%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-200 rounded-full">

                  <div className="w-[60%] h-3 bg-green-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span className="font-semibold">
                    Reports Generated
                  </span>

                  <span className="font-bold">
                    90%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-200 rounded-full">

                  <div className="w-[90%] h-3 bg-pink-500 rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default AdminDashboard;