import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { path: "/committee", label: "Committee" },
    { path: "/tpc-member", label: "TPC-Members" },
    { path: "/previous-conference", label: "Previous Conference" },
    { path: "/call-for-papers", label: "Call for Papers" },
    { path: "/speakers", label: "Speakers" },
    { path: "/venue", label: "Venue" },

  ];

  return (
    <nav className="py-10 bg-white md:px-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-auto flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            <img
              src="/ngplogo.png"
              alt="NGP Conference Logo"
              className="h-14"
            />
            <span className="text-neutral-700 font-bold text-2xl ml-3">
              AICOST-2026
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-neutral-700"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 w-full lg:w-auto mt-10 lg:mt-0`}
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-blue-500 font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-blue-500"
                  : "text-neutral-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          to={"/payment"}
          className={`hover:text-blue-500 font-medium transition-colors duration-300 ${
            location.pathname === '/payment'
              ? "text-blue-500"
              : "text-neutral-700"
          }`}
        >
          Registration & Payment
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
