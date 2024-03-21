// components/NavBar.tsx

import React from 'react';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/public/seu.png" width="32" height="32" className="w-8" alt="SEU Campusmate Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SEU Campusmate</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:p-0 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 md:bg-transparent md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 rounded md:p-0 dark:text-blue-500 md:hover:bg-transparent hover:text-blue-700 dark:hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 rounded md:p-0 dark:text-blue-500 md:hover:bg-transparent hover:text-blue-700 dark:hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 rounded md:p-0 dark:text-blue-500 md:hover:bg-transparent hover:text-blue-700 dark:hover:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 rounded md:p-0 dark:text-blue-500 md:hover:bg-transparent hover:text-blue-700 dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
