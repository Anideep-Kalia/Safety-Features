import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from "../../images/police.jpg";
export default function AdminLoginPage() {
  const [credentials, setCredentials] = useState({ userid: "", password: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid: credentials.userid, password: credentials.password })
    });
    const json = await response.json();       // in this case which is auth token 
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/admin");        //this is redirecting me to the home page after I login
      console.log("Logged In SUCCESSFULLY", "success")
    }
    else {
      console.log("Invalid Credentials", "danger");
    }
  }

  const onChange = (e) => {                                                    //this is fucntion is one of its kind
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='flex flex-row justify-center items-center h-screen'>
      {/* <form onSubmit={handleSubmit}>
  <div className="flex flex-wrap md:flex-row md:items-center">
 <div className="border-2 w-[34.3rem] h-[42.75rem] mt-[5.625rem] ml-[5.625rem] border-[#DADADA] [border-radius:1.875rem] md:mx-auto" >
<div className="cont2 flex flex-col">
  <h1 id="login" className='w-[3.06rem] h-[1.75rem] mt-[11.5rem] ml-[15.68rem] text-[#101828] font-[600] text-[1.125rem]'>Login</h1>
  <h1 className="ml-[6.5625rem] text-[0.875rem] text-[#4E7690]">Enter the details as per given by higher authorities</h1>
</div>
<div className="cont3 flex flex-col mt-[2rem] ml-[3.75rem]">
  <div className="abcd flex flex-col">
  <label for="emailID" className='font-[500] text-[0.75rem] text-[#4E7690]' >ID(required)</label>
  <input type="userid" className="form-control border-2 w-[26.875rem] h-[2.75rem] [border-radius:0.4rem] mt-[0.3rem] placeholder:text-[#D9D9D9] placeholder:text-[1rem] placeholder:ml-[1rem]" value={credentials.userid} placeholder='Eg: Pune' onChange={onChange} id="userid" name="userid" aria-describedby="useridHelp"/>
  </div>
  <div className="abcd flex flex-col mt-4">
<label for="password" id="pass" className='font-[500] text-[0.75rem] text-[#4E7690]'>Password(required)</label>
<input type="password" className="form-control form-control border-2 w-[26.875rem] h-[2.75rem] [border-radius:0.4rem] mt-[0.3rem] placeholder:text-[#D9D9D9] placeholder:text-[1rem] placeholder:ml-[1rem]" value={credentials.password} placeholder='Password' onChange={onChange} id="password" name ="password" />
  </div>
</div>
<div className="cont4 flex ml-[3.75rem] mt-[0.6rem]">
  <div className="cont4a flex">
  <input type="checkbox" className='h-[1.125rem] w-[1.125rem]' id="check"></input>
  <h1 className='text-[#979797] text-[0.75rem] ml-2'>Keep me logged in</h1>
  </div>
  <div className="cont4b">
  <h1 className='text-[#4E7690] text-[0.75rem] ml-[13rem] underline-offset-2' id="forgot">Forgot Password</h1>
  </div>
</div>
<button className='w-[10.31rem] mt-[2.5rem] ml-[12.06rem] h-[2.5rem] border-2 bg-[#4E7690] text-[#ffffff] text-[0.875rem] [border-radius:0.5rem]'>Login</button>
<div className="cont5 ml-[9.5rem] flex text-[0.75rem] text-[#4E7690] mt-[8.3rem]">
  <h1>Having an issue logging in ?</h1>
  <h1> <b>HELP CENTRE</b></h1>
</div>
 </div>
 <div className="right">
    <img src={image1} alt='' id="police" className='h-[56.8rem] w-[44.375rem] ml-[11.35rem] md:w-[34.375rem] md:m-auto md:mt-5'/>
 </div>
    </div>
    </form> */}
      <div className="w-[60%] flex flex-row justify-center ">
        <div className=" flex flex-col w-[32rem] justify-evenly h-[40rem] items-center border-2 border-[#DADADA] rounded-3xl ">
         <div className="flex flex-col justify-center items-center w-[32rem] h-[90%]">
         <h1 className='text-2xl font-semibold mb-2'>Login</h1>
          <p className='text-[#4E7690] mb-14 font-normal text-md'>Enter the details as per given by higher authorities</p>
          <form onSubmit={handleSubmit} className='w-full px-10 '>
            <div className="flex flex-col justify-center w-full  gap-2 mb-4">
              <label className='text-[#4E7690]'>ID (reduired)</label>
              <input
                type='text'
                id='ID'
                className='border w-full rounded-lg h-[2.75rem] px-3 placeholder:text-[#D9D9D9] placeholder:text-lg '
                placeholder='User Id'
                // value={credentials.userid}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col justify-center w-full gap-2 mb-2">
              <label className='text-[#4E7690]'>Password (reduired)</label>
              <input
                type='password'
                id='password'
                className='border w-full rounded-lg h-[2.75rem] px-3 placeholder:text-[#D9D9D9] placeholder:text-lg '
                // value={credentials.password}
                placeholder='Password'
                onChange={onChange}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className='flex flex-row justify-center items-center gap-3'>
                <div className="border-2 border-gray-300 rounded w-5 h-5 flex flex-row justify-center items-center">
                  <input type='checkbox'
                    className='w-3 h-3  appearance-none  checked:bg-[#4E7690] '
                  />
                </div>


                <p className='text-sm'>Keep me logged In</p>
              </div>
              <p className='text-sm text-[#4E7690] underline font-medium'>Forgot Password</p>
            </div>
            <div className=" flex flex-row justify-center items-center mt-10">
              <button className='text-white bg-[#4E7690] px-10 py-3 rounded-lg'>Login</button>
            </div>

          </form>

         </div>
          
          <p className='text-sm text-[#4E7690] font-medium bottom-0 '>Having an issue logging in ? <strong>HELP CENTER</strong></p>
        </div>

      </div>

      <div className='w-[40%] flex justify-end '>
        <img src={image1} alt='' className='h-screen w-[40rem]' />
      </div>
    </div>
  )
}
