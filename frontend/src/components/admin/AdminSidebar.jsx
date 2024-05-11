// import police from "../../images/police.png";
// import emblem from "../../images/emblem.png";
// import bhajan_lal from "../../images/bhajan_lal.webp";
import { MdOutlineDashboard } from "react-icons/md";
// import { IoLocationSharp } from "react-icons/io5";
// import { SiOpenaccess } from "react-icons/si";
// import { CiEdit } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";
// import { MdOutlineAddLocationAlt } from "react-icons/md";

import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { GrWorkshop } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup, HiOutlineViewGridAdd } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting, AiOutlineUserAdd, AiOutlineEdit } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";


const AdminSideBar = ({ active }) => {
  return (
    <div className="w-full h-[85vh] bg-white shadow-sm sticky top-0 left-0 z-5">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin-dashboard" className="w-full flex items-center">
          < MdDashboard
            size={30}
            color={`${active === 1 ? "crimson" : "#555"}`}
            className={`${active === 1 ? 'visible': 'hidden' }`}
          />
          < MdOutlineDashboard
            size={30}
            color={`#71829B`}
        
          />
          <h5
            className={`hidden md:block pl-2 text-[18px]  text-[#71829B] ${active === 1 ? "font-bold" : "font-normal"
              }`}
            
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-create-quiz" className="w-full flex items-center">
          <HiOutlineViewGridAdd
            size={30}
            color={`${active === 2 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden md:block pl-2 text-[18px] font-[400] ${active === 2 ? "text-[crimson]" : "text-[#555]"
              }`}
          >
            Location
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-quiz" className="w-full flex items-center">
          <FaLayerGroup
            size={30}
            color={`${active === 3 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden md:block pl-2 text-[18px] font-[400] ${active === 3 ? "text-[crimson]" : "text-[#555]"
              }`}
          >
            Access
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-user" className="w-full flex items-center">
          <HiOutlineUserGroup
            size={30}
            color={`${active === 4 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden md:block pl-2 text-[18px] font-[400] ${active === 4 ? "text-[crimson]" : "text-[#555]"
              }`}
          >
            Edit History
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/admin-update-password"
          className="w-full flex items-center"
        >
          <AiOutlineEdit
            size={30}
            color={`${active === 5 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden md:block pl-2 text-[18px] font-[400] ${active === 5 ? "text-[crimson]" : "text-[#555]"
              }`}
          >
            Archive
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/profile"
          className="w-full flex items-center"
        >
          <AiOutlineSetting
            size={30}
            color={`${active === 8 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden md:block pl-2 text-[18px] font-[400] ${active === 8 ? "text-[crimson]" : "text-[#555]"
              }`}
          >
            Delete Location
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default AdminSideBar;