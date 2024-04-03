import React from 'react'
import image1 from "../../images/police.jpg"
import "../../css/AdminLogin.css";
import emblem from "../../images/emblem.png";
import police from "../../images/police.png"
export default function AdminLoginPage() {
  return (
    <>
    <div className="cont">

 <div className="left">
<div className="cont1">
  <div className="cont1a">
<img src={emblem}  className='image'></img>
<img src={police} className='image'></img>
  </div>
<h1 id="raj">Rajasthan Police</h1>
</div>
<div className="cont2">
  <h1 id="login">Login</h1>
  <h1 className="enter">Enter the details as per given by higher authorities</h1>
</div>
<div className="cont3">
  <div className="abcd">
  <label for="emailID" >ID(required)</label>
  <input type="email" id="emailID" placeholder='Eg: Pune'></input>
  </div>
  <div className="abcd">
<label for="password" id="pass">Password(required)</label>
  <input type="password" id="password" placeholder='Password'></input>
  </div>
</div>
<div className="cont4">
  <div className="cont4a">
  <input type="checkbox" id="check"></input>
  <h1 className='enter keep'  >Keep me logged in</h1>
  </div>
  <div className="cont4b">
  <h1 className='enter keep' id="forgot">Forgot Password</h1>
  </div>
</div>
<button className='butt'>Login</button>
<div className="cont5">
  <h1>Having an issue logging in ?</h1>
  <h1> <b>HELP CENTRE</b></h1>
</div>
 </div>
 <div className="right">

    <img src={image1} id="police"></img>
 </div>
    </div>
 
    </>

  )
}
