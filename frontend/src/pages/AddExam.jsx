import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProctorNav from "./ProctorNav";

function AddExam() {
  const [formData, setFormData] = useState({
    date: "",
    examname: "",
    start: "",
    end: "",
    school: "",
    examlink: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simple validation check
    if (
      !formData.date ||
      !formData.examname ||
      !formData.start ||
      !formData.end ||
      !formData.school
    ) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    console.log(formData);
    // You can navigate to another page after submission if needed
    // navigate("/exams");
  };

  return (
    <>
      <ProctorNav />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600 mt-20 p-6">
        <form
          className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-semibold text-center text-gray-700">
            Add New Exam
          </h2>

          {/* Display error message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Date Input */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Exam Name Input */}
          <div>
            <label
              htmlFor="examname"
              className="block text-sm font-medium text-gray-700"
            >
              Exam Name
            </label>
            <input
              type="text"
              id="examname"
              name="examname"
              value={formData.examname}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter the exam name"
            />
          </div>

          {/* Start Time Input */}
          <div>
            <label
              htmlFor="start"
              className="block text-sm font-medium text-gray-700"
            >
              Start Time
            </label>
            <input
              type="time"
              id="start"
              name="start"
              value={formData.start}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* End Time Input */}
          <div>
            <label
              htmlFor="end"
              className="block text-sm font-medium text-gray-700"
            >
              End Time
            </label>
            <input
              type="time"
              id="end"
              name="end"
              value={formData.end}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* School Input */}
          <div>
            <label
              htmlFor="school"
              className="block text-sm font-medium text-gray-700"
            >
              School
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter the school"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Add Exam
          </button>

          {/* Go Back Link */}
          <button
            type="button"
            onClick={() => navigate("/admindash")}
            className="w-full bg-gray-600 text-white font-bold py-3 px-4 rounded-md hover:bg-gray-700 transition duration-300 mt-4"
          >
            Go Back
          </button>
        </form>
      </div>
    </>
  );
}

export default AddExam;
