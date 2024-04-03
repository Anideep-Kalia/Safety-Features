import React from 'react';
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
        onClick={nextStage}
      >
        Next
      </button>
    </div>

   </form>

   {/* </div> */}
   </>
  );
};

export default Stage1;