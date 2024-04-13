import React, { useState, useRef, useEffect } from "react";
import bhajan_lal from "../../images/bhajan_lal.webp";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav class=" py-4 px-6 flex justify-between items-center w-full ">
        <div className="text-3xl text-[#4E7690] mr-12 rounded-full shadow-md">
          <IoIosArrowBack />
        </div>
        <div className="flex-auto text-sm text-[#4E7690] ">Categories</div>
        <div className="relative flex w-1/2 rounded-full">
          <input
            type="search"
            className=" relative m-0 -me-0.5 block flex-auto rounded-tl-full rounded-bl-full bg-slate-200 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            id="exampleFormControlInput3"
            aria-describedby="button-addon3"
          />
          <button
            className="z-[2] inline-block rounded-tr-full rounded-br-full bg-[#4E7690] text-white rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
            data-twe-ripple-init
            data-twe-ripple-color="white"
            type="button"
            id="button-addon3"
          >
            Search
          </button>
        </div>
        <div className="flex-initial w-56">
          <div className="flex justify-center items-center">
            <div className="flex-initial pl-10 pr-8 text-[#4E7690]">
              <IoSettingsOutline />
            </div>
            <div className="relative inline-block z-50" ref={dropdownRef}>
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <div className="w-12">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={bhajan_lal}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="flex flex-col justify-center text-xs">
                  <div className="text-[#4E7690]">chulbul Pandey</div>
                  <div className="text-[#4E7690] font-bold">204389</div>
                </div>
                <div className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#4E7690]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {isOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    {/* Dropdown menu items */}
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
