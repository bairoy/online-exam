import examImage from "../assets/exam.png"; // Importing the image
import { useNavigate } from "react-router-dom"; // Use the useNavigate hook

const Home = () => {
  const navigate = useNavigate(); // Correctly call the useNavigate hook

  return (
    <>
      <section className="bg-gradient-to-r from-purple-500 to-blue-600 py-10 px-5 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your Online Testing Partner
          </h1>
          <p className="text-lg md:text-xl text-white">
            The most efficient online exam system for all your testing needs.
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
            <button
              className="bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg object-contain"
            src={examImage}
            alt="Exam going on"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className=" bg-gradient-to-r from-purple-500 to-blue-600 py-12 px-5 md:px-20 lg:px-32 bg-white">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Key Features of Our System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Secure Proctoring
            </h3>
            <p className="text-gray-600">
              Monitor exams in real-time with video proctoring and prevent
              cheating with restricted tab switching.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Role-Based Access
            </h3>
            <p className="text-gray-600">
              Different roles like student, proctor, and admin to manage exams
              efficiently and securely.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Easy Exam Creation
            </h3>
            <p className="text-gray-600">
              Create exams with a variety of question types and schedule them
              easily through an intuitive interface.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Real-Time Analytics
            </h3>
            <p className="text-gray-600">
              Get detailed exam reports and track student progress in real-time
              to ensure transparency.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Customizable Exams
            </h3>
            <p className="text-gray-600">
              Adjust exam settings like duration, randomization, and difficulty
              levels to meet the needs of different tests.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Mobile-Friendly
            </h3>
            <p className="text-gray-600">
              Students can take exams on any device, ensuring accessibility and
              convenience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
