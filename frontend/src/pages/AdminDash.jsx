import ProctorNav from "./ProctorNav";
import { useNavigate } from "react-router-dom";

function AdminDash() {
  const navigate = useNavigate();

  return (
    <>
      <ProctorNav />

      <main className="mt-20 px-5">
        {/* Add Exam Button */}
        <div className="text-center my-8">
          <button
            onClick={() => navigate("/addexam")}
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Add Exam
          </button>
        </div>

        {/* Activities of Today Section */}
        <section className="bg-gradient-to-r from-purple-200 to-blue-400 px-5 py-10 rounded-md shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Activities of Today
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-white text-gray-800 py-3 px-5 rounded-md shadow-md">
            <div className="font-semibold text-purple-600">Date</div>
            <div className="font-semibold text-purple-600">Exam Name</div>
            <div className="font-semibold text-purple-600">Start At</div>
            <div className="font-semibold text-purple-600">End At</div>
            <div className="font-semibold text-purple-600">Action</div>
          </div>

          {/* Sample row (you would map real data here) */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center bg-gray-100 mt-4 p-4 rounded-md">
            <div>2024-10-10</div>
            <div>Math Exam</div>
            <div>10:00 AM</div>
            <div>12:00 PM</div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300">
              Edit
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        All rights reserved Smart Exam &copy; 2024
      </footer>
    </>
  );
}

export default AdminDash;
