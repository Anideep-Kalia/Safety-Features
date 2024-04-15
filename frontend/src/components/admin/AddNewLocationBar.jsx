import React, { useState } from "react";
import PopupMenu from "./AddNewLocationPopup/PopupMenu";

export default function AddNewLocationBar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="mr-4 ml-4">
        <div className="flex justify-between">
          <div className="">
            <div className="flex items-center">
              <h2 className="text-sm mr-2 font-bold">Current Location</h2>
              <p className="text-xs mt-1 bg-[#F7FAFF] text-[#4E7690] px-2 rounded-xl">updated 5 min ago</p>
            </div>
            <p className="text-xs text-[#4E7690]">Safety location that are live on website</p>
          </div>
          <button
            className="bg-[#4E7690]  text-white py-1 px-4 rounded-xl hover:bg-[#354c5c]"
            onClick={togglePopup}
          >
            Add Location
          </button>
        </div>

        <PopupMenu isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      </div>
    </>
  );
}
