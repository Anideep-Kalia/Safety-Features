import React from 'react';

const Stage2 = ({ nextStage, prevStage }) => {
  return (
    <div className="bg-white p-8 rounded ">
      <h2 className="text-lg font-bold mb-4">Stage 2</h2>
      <p>This is the content of stage 2.</p>
      <div className="mt-4 space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={prevStage}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextStage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stage2;