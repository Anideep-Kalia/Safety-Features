import React from 'react';
<<<<<<< HEAD
// import "./Stage1.css";
const Stage1 = ({ nextStage }) => {
  return (
   <>
   {/* <div className="container"> */}
   <h1 className='heading font-bold text-xl'>Add Location</h1>
   <p className='para'>Fill all the details given below to add location</p>                                                       
   <form>
    <div className="flex flex-col mt-4">
    <div className='flex'>
      <div className="flex flex-col basis-1/2">
      <label className='font-semibold'>Place Name(required)</label>
      <input placeholder='Eg: Pune' className='mr-4'></input>
      </div>
      <div className="flex flex-col basis-1/2">
      <label className='font-semibold'>Category(required)</label>
      <input placeholder='Select Category'></input>
      </div>
    </div>
    <div className="flex flex-col">
    <label className='font-semibold'>Address(required)</label>
      <input placeholder='Street Address' className='w-full'></input>
    </div>
    <div className='flex'>
      <div className="flex flex-col basis-1/2">
      <label className='font-semibold'>City(required)</label>
      <input placeholder='Eg: Pune' className='mr-4'></input>
      </div>
      <div className="flex flex-col basis-1/2">
      <label className='font-semibold'>Pincode(required)</label>
      <input placeholder='Eg: 41141'></input>
      </div>
      </div>
    <div className='flex'>
      <div className="flex flex-col basis-1/2">
      <label className='font-semibold'>State(required)</label>
      <input placeholder='Eg: Maharashtra' className='mr-4'></input>
      </div>
      <div className="flex flex-col basis-1/2">
      <label className='font-semibold'>Country(required)</label>
      <input placeholder='Select Country'></input>
      </div>
    </div>
    <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 m-auto"
=======

const Stage1 = ({ nextStage }) => {
  return (
    <div className="bg-white p-8 rounded ">
      <h2 className="text-lg font-bold mb-4">Stage 1</h2>
      <p>This is the content of stage 1.</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>>>>>>> 75ed98670869091004a7cc7b88e97bcf08d24ea4
        onClick={nextStage}
      >
        Next
      </button>
    </div>
<<<<<<< HEAD

   </form>

   {/* </div> */}
   </>
=======
>>>>>>> 75ed98670869091004a7cc7b88e97bcf08d24ea4
  );
};

export default Stage1;