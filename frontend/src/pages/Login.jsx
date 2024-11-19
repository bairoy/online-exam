import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
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
    navigate("/studentdash");
  };
  return (
    <div className="w-full flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <form
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center  text-3xl text-gray-700 font-semibold">
          LOGIN
        </h1>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 "
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          type="submit"
        >
          sign in
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          <a
            href="/recovery"
            className="text-purple-600 font-medium hover:underline hover:text-red-500"
          >
            forgot password
          </a>{" "}
        </p>
        <p className="text-center text-sm text-gray-600">
          not registered ?
          <a
            href="/signup"
            className="text-purple-600 font-medium hover:underline hover:text-red-500"
          >
            sign up
          </a>
        </p>
      </form>
    </div>
  );
};
export default Login;
