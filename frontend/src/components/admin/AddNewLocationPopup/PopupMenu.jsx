import React, { useState ,useEffect ,useRef} from "react";
import Stage1 from "./StageOne";
import Stage2 from "./StageTwo";
import Stage3 from "./StageThree";
import { Transition } from '@headlessui/react';
import { IoMdClose } from "react-icons/io";

export default function PopupMenu({ isPopupOpen, setIsPopupOpen }) {
  const [currentStage, setCurrentStage] = useState(1);
  const popupRef = useRef();

useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!popupRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isPopupOpen]);

  const nextStage = () => {
    setCurrentStage(currentStage + 1);
  };

  const prevStage = () => {
    setCurrentStage(currentStage - 1);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
    setCurrentStage(1); 
  };

  return (
    <>
      {isPopupOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div  className="fixed inset-0 flex items-center justify-center z-50">
            <div ref={popupRef} className="relative bg-white p-4 rounded ">
              <button
                className="absolute top-0 right-0 p-1 m-1 rounded-full bg-white shadow-md hover:bg-gray-300 focus:outline-none"
                onClick={handleClose}
              >
                <IoMdClose />
              </button>
              {currentStage === 1 && <Stage1 nextStage={nextStage} />}
              {currentStage === 2 && <Stage2 nextStage={nextStage} prevStage={prevStage} />}
              {currentStage === 3 && <Stage3 prevStage={prevStage} handleClose={handleClose} />}
            </div>
          </div>
        </>
      )}
    </>
  );
}
