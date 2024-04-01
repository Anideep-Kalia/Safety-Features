import React from 'react';

const Stage1 = ({ nextStage }) => {
  return (
    <div className="bg-white p-8 rounded ">
      <h2 className="text-lg font-bold mb-4">Stage 1</h2>
      <p>This is the content of stage 1.</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={nextStage}
      >
        Next
      </button>
    </div>
  );
};

export default Stage1;