import React from 'react';
import image from "../../../images/image.png";
const Stage3 = ({ prevStage, handleClose }) => {
  return (
    <>
      {/* <h2 className="text-lg font-bold mb-4">Stage 3</h2> */}
      {/* <p>This is the content of stage 3.</p> */}
      {/* <div className="mt-4 space-x-4"> */}
        <img src={image} className='w-1/2 m-auto'></img>
      <h1 className='text-center text-xl my-2 font-bold'>Location Successfully created</h1>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-3 ml-72"
          onClick={handleClose}
        >
          Finish
        </button>
        <h1 className='text-center m-3 underline underline-offset-2 text-sky-700'>Add another location</h1>
      {/* </div> */}
    </>
  );
};

export default Stage3;