import { useState } from "react";
import logoImage from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function StudentNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Left side: Logo and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDropdown}
              className="text-white focus:outline-none lg:hidden"
            >
              {/* Menu icon for mobile */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <img
              src={logoImage}
              alt="logo"
              className="w-10 h-10 object-cover hidden lg:block"
            />
          </div>

          {/* Mobile Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-16 left-0 w-full bg-white text-black shadow-lg lg:hidden">
              <ul className="flex flex-col text-center py-4">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/previousexams" className="block">
                    Previous Exams
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/upcomingexams" className="block">
                    Upcoming Exams
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/attemptedexam" className="block">
                    Attempted Exams
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/result" className="block">
                    Result
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="/upcomingexam"
              className="hover:text-gray-200 transition duration-300"
            >
              Upcoming Exams
            </a>
            <a
              href="/previousexam"
              className="hover:text-gray-200 transition duration-300"
            >
              Previous Exams
            </a>
            <a
              href="/attemptedexam"
              className="hover:text-gray-200 transition duration-300"
            >
              Attempted Exams
            </a>
            <a
              href="/result"
              className="hover:text-gray-200 transition duration-300"
            >
              Result
            </a>
          </nav>

          {/* Right side: Profile and Logout */}
          <div className="flex items-center gap-4">
            <a
              href="/userprofile"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Profile
            </a>
            <button
              onClick={() => navigate("/")}
              className="bg-white text-blue-600 rounded-md px-4 py-2 hover:bg-gray-200 transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Add padding to prevent content from being hidden behind the fixed header */}
      <div className="pt-20"></div>
    </>
  );
}

export default StudentNav;
