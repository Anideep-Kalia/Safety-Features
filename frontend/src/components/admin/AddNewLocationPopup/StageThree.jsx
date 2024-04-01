import React from 'react';

const Stage3 = ({ prevStage, handleClose }) => {
  return (
    <div className="bg-white p-8 rounded ">
      <h2 className="text-lg font-bold mb-4">Stage 3</h2>
      <p>This is the content of stage 3.</p>
      <div className="mt-4 space-x-4">
      
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClose}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default Stage3;