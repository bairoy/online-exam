import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";

function ProctorNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className=" fixed top-0 left-0 w-full z-50 max-w-screen-xl min-w-full mx-auto flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none hover:text-gray-200 lg:hidden"
          >
            {/* Menu icon for mobile view */}
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

          {/* Dropdown Menu (Mobile Only) */}
          {isDropdownOpen && (
            <div className="absolute top-16 left-4 w-48 bg-white shadow-lg rounded-md py-2 lg:hidden transition duration-300">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/prevactivity" className="text-gray-700">
                    Previous Activity
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/upcomingactivity" className="text-gray-700">
                    Upcoming Activity
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Logo */}
          <img
            src={logoImage}
            alt="Logo"
            className="h-10 w-10 object-contain hidden lg:block"
          />

          {/* Desktop Links (Hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-6 text-white">
            <a
              href="/prevactivity"
              className="hover:text-gray-200 transition duration-300"
            >
              Previous Activity
            </a>
            <a
              href="/upcomingactivity"
              className="hover:text-gray-200 transition duration-300"
            >
              Upcoming Activity
            </a>
          </nav>
        </div>

        {/* Profile and Logout */}
        <div className="flex items-center gap-4">
          <a
            href="/profile"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Profile
          </a>
          <button
            className="bg-white text-blue-600 rounded-md px-4 py-2 hover:bg-gray-200 transition duration-300"
            onClick={() => navigate("/logout")}
          >
            Logout
          </button>
        </div>
      </header>
    </>
  );
}

export default ProctorNav;
