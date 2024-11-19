import ProctorNav from "./ProctorNav";

function ProctorDash() {
  return (
    <>
      <ProctorNav></ProctorNav>

      {/* Main Section with today's activities */}
      <section className=" px-5 py-10 mt-20 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Activities of Today
        </h1>

        {/* Table header */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-white py-3 px-5 rounded-lg shadow-lg">
          <div className="font-semibold">Date</div>
          <div className="font-semibold">Exam Name</div>
          <div className="font-semibold">Start At</div>
          <div className="font-semibold">End At</div>
          <div className="font-semibold">Monitor</div>
        </div>

        {/* Sample data row */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-white py-4 px-5 mt-4 rounded-lg shadow-md">
          <div className="text-gray-700">2024-10-10</div>
          <div className="text-gray-700">Math Exam</div>
          <div className="text-gray-700">10:00 AM</div>
          <div className="text-gray-700">12:00 PM</div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300">
            Monitor
          </button>
        </div>

        {/* Another data row */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-white py-4 px-5 mt-4 rounded-lg shadow-md">
          <div className="text-gray-700">2024-10-11</div>
          <div className="text-gray-700">Physics Exam</div>
          <div className="text-gray-700">1:00 PM</div>
          <div className="text-gray-700">3:00 PM</div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300">
            Monitor
          </button>
        </div>
      </section>

      {/* Upcoming Activities Section */}
      <section className="bg-gray-100 px-5 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Upcoming Activities
        </h2>

        {/* Table header */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-white py-3 px-5 rounded-lg shadow-lg">
          <div className="font-semibold">Date</div>
          <div className="font-semibold">Exam Name</div>
          <div className="font-semibold">Start At</div>
          <div className="font-semibold">End At</div>
          <div className="font-semibold">Monitor</div>
        </div>

        {/* Upcoming activity row */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-white py-4 px-5 mt-4 rounded-lg shadow-md">
          <div className="text-gray-700">2024-10-12</div>
          <div className="text-gray-700">Physics Exam</div>
          <div className="text-gray-700">2:00 PM</div>
          <div className="text-gray-700">4:00 PM</div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300">
            Monitor
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        All rights reserved Smart Exam &copy; 2024
      </footer>
    </>
  );
}

export default ProctorDash;
