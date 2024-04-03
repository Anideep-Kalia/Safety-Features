import React from 'react';
<<<<<<< HEAD
const Stage2 = ({ nextStage, prevStage }) => {
  return (
    <>
<h1 className='text-xl font-bold'>Category</h1>
<p className='text-sky-700'>Select till how much time do you want location to be seen</p>
<form>
  <div className="flex flex-col">
    <label className='mt-8 text-sky-700'>Select any one option</label>
    <div className="flex h-12 ">
     <input type="radio" name="option" id="perm" value="Permanent" className='w-8 mr-4 mt-1' ></input>
     <label for="perm" className='mt-2 font-semibold text-lg'>Permanent</label>
      </div>   
      <div className="flex">
     <input type="radio" id="temp" name="option" value="Temporary" className='w-8 mr-4 mt-1' ></input>
     <label for="temp" className='mt-2 text-lg font-semibold'>Temporary</label> 
      </div>
     <h1 className='mt-4'>(Note : Temporary selection would be only visible till the time that will be entered.)</h1>
     <div className='flex mt-8'>
      <div className="flex flex-col basis-1/2">
      <label className='font-semibold' for="days">Days(required)</label>
      <input placeholder='Eg: 2 days' id="days" className='mr-4'></input>
      </div>
      <div className="flex flex-col basis-1/2">
      <label className='font-semibold' for="hours">Hours</label>
      <input placeholder='Eg: 2 hours' id="hours"></input>
      </div>
    </div>
  </div>
  <div className="flex justify-between">
  <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
=======

const Stage2 = ({ nextStage, prevStage }) => {
  return (
    <div className="bg-white p-8 rounded ">
      <h2 className="text-lg font-bold mb-4">Stage 2</h2>
      <p>This is the content of stage 2.</p>
      <div className="mt-4 space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>>>>>>> 75ed98670869091004a7cc7b88e97bcf08d24ea4
          onClick={prevStage}
        >
          Previous
        </button>
        <button
<<<<<<< HEAD
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={nextStage}
          >
          Next
        </button>
  </div>
</form>
          </>
    // <div className="bg-white p-8 rounded ">
    //   <h2 className="text-lg font-bold mb-4">Stage 2</h2>
    //   <p>This is the content of stage 2.</p>
    //   <div className="mt-4 space-x-4">
      
    //   </div>
    // </div>
=======
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextStage}
        >
          Next
        </button>
      </div>
    </div>
>>>>>>> 75ed98670869091004a7cc7b88e97bcf08d24ea4
  );
};

export default Stage2;