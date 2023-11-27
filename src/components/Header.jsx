"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [activePage, setActivePage] = useState("Home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
    closeNav();
  };

  return (
    <nav className="fixed top-0 z-20 w-full border-b bg-[#181818] border-[#262626] p-6">
      <div className="relative">
        <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
          LayarKaca31
        </span>

        <button
          type="button"
          className="absolute top-0 right-0 inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`md:inline-flex md:w-auto ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 ml-8 font-medium border rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className={`block px-3 py-2 rounded md:bg-transparent ${
                  activePage === "Home"
                    ? "text-[#DB2887] hover:text-[#DB2887]"
                    : "text-white hover:bg-gray-700 hover:text-white opacity-90"
                } md:p-0`}
                aria-current="page"
                onClick={() => {
                  handlePageClick("Home");
                  setActivePage("Home");
                }}
              >
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                href="/popular"
                className={`block px-3 py-2 rounded ${
                  activePage === "Popular"
                    ? "text-[#DB2887] hover:text-[#DB2887]"
                    : "md:hover:text-[#DB2887] text-white hover:bg-gray-700 hover:text-white opacity-90"
                } md:p-0 border-gray-700`}
                onClick={() => {
                  handlePageClick("Popular");
                  setActivePage("Popular");
                }}
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                href="/upcoming"
                className={`block px-3 py-2 rounded ${
                  activePage === "Upcoming"
                    ? "text-[#DB2887] hover:text-[#DB2887]"
                    : "md:hover:text-[#DB2887] text-white hover:bg-gray-700 hover:text-white opacity-90"
                } md:p-0 border-gray-700`}
                onClick={() => {
                  handlePageClick("Upcoming");
                  setActivePage("Upcoming");
                }}
              >
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                href="/topRated"
                className={`block px-3 py-2 rounded ${
                  activePage === "Top Rated"
                    ? "text-[#DB2887] hover:text-[#DB2887]"
                    : "md:hover:text-[#DB2887] text-white hover:bg-gray-700 hover:text-white opacity-90"
                } md:p-0 border-gray-700`}
                onClick={() => {
                  handlePageClick("Top Rated");
                  setActivePage("Top Rated");
                }}
              >
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
