import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { IoFilterOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function AdminTable() {
  const tableData = [
    {
      id: 1,
      locationName: "IMT Plice Station",
      city: "Silver",
      distance: "Laptop",
      status: "$2999",
      timeLeft: "1 hr 30 minutes",
      access: 1,
    },
    {
      id: 2,
      locationName: "Sector 1 Police Station",
      city: "White",
      distance: "Laptop PC",
      status: "$1999",
      timeLeft: "2 hrs",
      access: 2,
    },
  ];

  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg m-4 border-solid border border-gray-300">
        <div className="flex flex-column sm:flex-row flex-grow space-y-4 sm:space-y-0 items-center justify-between p-2 pt-4 pb-4">
          <div>
            <div className="ml-2 flex border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button className="flex-1 py-2 px-4 text-sm text-[#4E7690] border-r border-gray-200 hover:bg-[#EAECF0] transition-colors duration-300 cursor-pointer shadow-sm">
                Today
              </button>
              <button className="flex-2 py-2 px-4 text-sm text-[#4E7690] border-r border-gray-200 hover:bg-[#EAECF0] transition-colors duration-300 cursor-pointer">
                Last 7 Days
              </button>
              <button className="flex-3 py-2 px-4 text-sm text-[#4E7690] hover:bg-[#EAECF0]  transition-colors duration-300 cursor-pointer">
                Custom Day
              </button>
            </div>
          </div>
          <label for="table-search" class="sr-only">
            Search
          </label>

          <div class="relative">
            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor" 
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <IoFilterOutline />
            </div>
            <div className="block p-2 ps-10 text-sm">Filter</div>
          </div>
          <div className="relative mr-2 text-sm">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <IoFilterOutline />
            </div>
            <button className="block p-2 ps-10 text-sm border-lg boder-solid border border-black-200 rounded-lg shadow-sm hover:bg-gray-200">
              Sort By
            </button>
          </div>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-gray-400">
          <thead className="text-xs text-[#4E7690] bg-[#EAECF0] border-solid border border-gray-300">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-[#4E7690] bg-gray-100 border-gray-300 rounded focus:ring-[#4E7690] checked:border-[#4E7690] checked:bg-[#4E7690] checked:before:bg-gray-900"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                {/* <div className="flex">
                  <span>Location Name</span>
                  <span className="pt-1 pl-2">
                    <FaArrowDown />
                  </span>
                </div> */}
                Location Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                {/* <div className="flex">
                  <span>City</span>
                  <span className="pt-1 pl-2">
                    <FaArrowDown />
                  </span>
                </div> */}
                City
              </th>
              <th scope="col" className="px-6 py-3">
                {/* <div className="flex">
                  <span>Distance</span>
                  <span className="pt-1 pl-2">
                    <FaArrowDown />
                  </span>
                </div> */}
                Distance
              </th>
              <th scope="col" className="px-6 py-3">
                {/* <div className="flex">
                  <span>Status</span>
                  <span className="pt-1 pl-2">
                    <FaArrowDown />
                  </span>
                </div> */}
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                {/* <div className="flex">
                  <span>Time Left</span>
                  <span className="pt-1 pl-2">
                    <FaArrowDown />
                  </span>
                </div> */}
                Time Left
              </th>
              <th scope="col" className="px-6 py-3">
                {/* <div className="flex">
                  <span>Access</span>
                  <span className="pt-1 pl-2">
                    <FaArrowDown />
                  </span>
                </div> */}
                Access
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-${item.id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-${item.id}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.locationName}
                </th>
                <td className="px-6 py-4">{item.city}</td>
                <td className="px-6 py-4">{item.distance}</td>
                <td className="px-6 py-4 flex items-center">
                  <span>{item.status}</span>
                  <span className="mt-1 pl-2">
                    <TbRefresh />
                  </span>
                </td>
                <td className="px-6 py-4">{item.timeLeft}</td>
                <td className="px-6 py-4">{item.access}</td>
                <td className="px-6 py-4 text-[#4E7690]">
                  <FaRegEdit />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 mb-2"
          aria-label="Table navigation p-2"
        >
          <span class="text-sm font-normal text- text-[#4E7690] mb-4 md:mb-0 block w-full md:inline md:w-auto ml-2">
            <span class="font-normal text-[#4E7690] dark:text-white">1-15</span>{" "}
            of{" "}
            <span class="font-normal text-[#4E7690] dark:text-white">
              1000 items
            </span>
          </span>
          <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 mr-2 mb-2">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
