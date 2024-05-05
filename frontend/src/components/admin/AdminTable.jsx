import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { IoFilterOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import pageContext from "../../context/pages/pageContext";
import { useContext } from "react";
export default function AdminTable() {

  const context = useContext(pageContext);
  const [status, setStatus] = useState('Temporary');
  const [center, setCenter] =  useState( {lat: null, lng: null })


  const { places, addPlace, deletePlace, editPlace, getPlaces,getCoordinates, userCoordinates } = useContext(pageContext);
  

 

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

  
useEffect(() => {
  getPlaces();
  // comment this after login and signup is made
  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMzYwMjM2MmFiYmE3YWY4ZTA1OTNmIn0sImlhdCI6MTcxMjU0NTgyN30.wkRD4c2f2BLt58YG74XycTGIYS5nR6c777pRW9K8g3g");
  getCoordinates();
}, []);

  useEffect(() => {
    if (userCoordinates && userCoordinates.coordinates && userCoordinates.coordinates.length > 0) {
        console.log(userCoordinates);
        const [lat, lng] = userCoordinates.coordinates[0]; // Extract lat and lng from the array
        if (lat && lng) {
            setCenter({ lat, lng });
        }
    }

}, [userCoordinates]);



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
                Location Name
              </th>
              <th scope="col" className="px-6 py-3 ">

                City
              </th>
              <th scope="col" className="px-6 py-3">

                Distance
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Time Left
              </th>
              <th scope="col" className="px-6 py-3">
                Access
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {places && places.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-${item._id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">{calculateDistance(center.lat, center.lng, item.coordinates[0], item.coordinates[1])}</td>
                <td className="px-6 py-4 flex items-center">
                  {/* <span>{getStatus(item.expiration)}</span> */}
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
