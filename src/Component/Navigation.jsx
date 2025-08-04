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
    {path:"/contact",label:"Contact Us"}
  ];

  return (
    <nav className="py-10 bg-white md:px-10 relative">
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
        </div>

        <div className="flex items-center gap-6">
          <Link
            to={"/payment"}
            className={`hover:bg-blue-500 bg-blue-400 text-white px-2 py-1 rounded-lg font-medium transition-colors duration-300 ${
              location.pathname === "/payment"
                ? "text-blue-500"
                : "text-neutral-700"
            }`}
          >
            Registration & Payment
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" text-neutral-700 bg-gray-100 border border-gray-200 rounded-md p-2 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer"
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
          className={`fixed top-0 left-0 h-screen max-w-[400px] w-full flex flex-col bg-white p-5 duration-300 transition-all ease-in-out  gap-10 py-10 shadow-xl ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-2xl font-semibold">Menu</h1>
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-blue-500 font-medium transition-colors duration-300 text-xl w-full hover:bg-gray-100 p-2 ${
                location.pathname === link.path
                  ? "text-blue-500"
                  : "text-neutral-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
