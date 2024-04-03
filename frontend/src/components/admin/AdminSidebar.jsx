import police from "../../images/police.png";
import emblem from "../../images/emblem.png";
import bhajan_lal from "../../images/bhajan_lal.webp";
import { MdOutlineDashboard } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SiOpenaccess } from "react-icons/si";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineAddLocationAlt } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className=" h-full fixed left-0 top-0 overflow-y-auto w-56 shadow-md">
        <div className="p-3 pt-6 flex items-center">
          <img src={emblem} alt="Image 1" className="w-10 h-10 mr-2" />
          <img src={police} alt="Image 2" className="w-10 h-10" />
          <span className=" font-semibold text-sm overflow-hidden whitespace-nowrap ml-2">
            Rajasthan Police
          </span>
        </div>
        <div className="mt-2 flex justify-center items-center">
          <img src={bhajan_lal} alt="Image 3" className="w-10 h-10" />
        </div>
        <div className=" text-xs flex flex-col justify-center items-center pl-8 pr-8 font-semibold">
          <div>Shri Bhajan Lal Sharma </div>
          <div>Hon’ble Chief Minister of</div>
          <div>Rajasthan</div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            
            type="button"
            class="text-white bg-[#4E7690] hover:bg-[#354c5c] focus:ring-4 focus:ring-blue-300 rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
          >
            <div className="flex">
              <div className="flex flex-col justify-center items-center">
                <MdOutlineAddLocationAlt className="mr-2" />
              </div>
              <div>Add New Location</div>
            </div>
          </button>
        </div>
        <div className=" pl-4 ">
          <h1 className="text-white text-2xl font-bold">Sidebar</h1>
          <ul className="mt-1">
            <li className="text-[#4E7690] text-xs px-3 py-2">Menu</li>
            <li className="py-2 px-3">
              <div className="flex hover:font-bold">
                <div className="flex flex-col justify-center items-center">
                  <MdOutlineDashboard className="text-[#354c5c] mr-2" />
                </div>
                <a href="#" className="text-[#4E7690] text-sm">
                  Dashboard
                </a>
              </div>
            </li>
            <li className="py-2 px-3">
              <div className="flex hover:font-bold">
                <div className="flex flex-col justify-center items-center">
                  <IoLocationSharp className="text-[#354c5c] mr-2" />
                </div>
                <a href="#" className="text-[#4E7690] text-sm">
                  Location
                </a>
              </div>
            </li>
            <li className="py-2 px-3">
              <div className="flex hover:font-bold">
                <div className="flex flex-col justify-center items-center">
                  <SiOpenaccess className="text-[#354c5c] mr-2" />
                </div>
                <a href="#" className="text-[#4E7690] text-sm">
                  Access
                </a>
              </div>
            </li>
            <li className="py-2 px-3">
              <div className="flex hover:font-bold">
                <div className="flex flex-col justify-center items-center">
                  <CiEdit className="text-[#354c5c] mr-2" />
                </div>
                <a href="#" className="text-[#4E7690] text-sm">
                  Edit History
                </a>
              </div>
            </li>
            <li className="py-2">
              <button
                type="button"
                class="focus:outline-none text-red-800 bg-red-200 hover:bg-red-300 focus:ring-4 flex focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                <div className="flex">
                  <div className="flex flex-col justify-center items-center">
                    <MdDeleteOutline className="mr-2" />
                  </div>
                  <div> Deleted Location</div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
