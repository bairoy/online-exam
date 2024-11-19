import StudentNav from "./StudentNav";

function StudentDash() {
  return (
    <>
      <StudentNav></StudentNav>

      {/* Main Section with padding-top to avoid overlap with fixed nav */}
      <section className="pt-20 px-4 md:px-8 py-10 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Activities of Today
        </h1>

        {/* Grid for table headers */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-white py-3 px-5 rounded-lg shadow-lg">
          <div className="font-semibold">Date</div>
          <div className="font-semibold">Exam Name</div>
          <div className="font-semibold">Start At</div>
          <div className="font-semibold">End At</div>
          <div className="font-semibold">Take Exam</div>
        </div>

        {/* Example data row (you can map real data here) */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-white py-4 px-5 mt-4 rounded-lg shadow-md">
          <div className="text-gray-700">2024-10-10</div>
          <div className="text-gray-700">Math Exam</div>
          <div className="text-gray-700">10:00 AM</div>
          <div className="text-gray-700">12:00 PM</div>
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300"
            onClick={() => {
              window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSfCB2OlADFLK1GKutM_bM9b812dQJUFqPG3Ye_RWuSCUhh_LA/viewform?usp=sf_link";
            }}
          >
            Start
          </button>
        </div>

        {/* Add more rows as needed */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-white py-4 px-5 mt-4 rounded-lg shadow-md">
          <div className="text-gray-700">2024-10-11</div>
          <div className="text-gray-700">Physics Exam</div>
          <div className="text-gray-700">1:00 PM</div>
          <div className="text-gray-700">3:00 PM</div>
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300"
            onClick={() => {
              window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSfCB2OlADFLK1GKutM_bM9b812dQJUFqPG3Ye_RWuSCUhh_LA/viewform?usp=sf_link";
            }}
          >
            Start
          </button>
        </div>
      </section>
    </>
  );
}

export default StudentDash;
