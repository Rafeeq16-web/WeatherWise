import React from "react";

const Header = () => {
  return (
    // Header section with blue-teal gradient background
    <>
      <header className="bg-blue-teal-gradient top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
        {/* Header content */}
        <div className="flex flex-wrap items-center justify-between py-2">
          {/* Logo and brand name */}
          <div className="w-1/2 md:w-auto">
            <a className="flex flex-row items-center gap-2" href="/">
              <img src="images/logo.png" alt="" />
              <p className="text-white font-bold text-2xl">WeatherWise</p>
            </a>
          </div>

          {/* Menu toggle button for mobile */}
          <label
            htmlFor="menu-toggle"
            className="pointer-cursor md:hidden block"
          >
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>

          {/* Hidden checkbox input for mobile menu toggle */}
          <input className="hidden" type="checkbox" id="menu-toggle" />

          {/* Navigation menu */}
          <div className="hidden md:block w-full md:w-auto" id="menu">
            <nav className="w-full bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
              <ul className="md:flex items-center">
                {/* About Us link */}
                <li>
                  <a
                    className="py-2 inline-block text-black md:text-white md:hidden lg:block font-semibold"
                    href="#aboutus"
                  >
                    About Us
                  </a>
                </li>
                {/* Contact Us link */}
                <li className="md:ml-4">
                  <a
                    className="py-2 inline-block text-black md:text-white md:px-2 font-semibold"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
