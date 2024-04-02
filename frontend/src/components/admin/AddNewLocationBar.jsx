import React, { useState } from 'react';
import PopupMenu from './AddNewLocationPopup/PopupMenu';

export default function AddNewLocationBar() {
      const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };


  return (
    <>
     <div className=''>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={togglePopup}
      >
        Open Popup
      </button>
      <PopupMenu isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </div>
    </>
  )
}
