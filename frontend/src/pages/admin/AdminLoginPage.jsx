import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from "../../images/police.jpg"
import "../../css/AdminLogin.css";
import emblem from "../../images/emblem.png";
import police from "../../images/police.png"



export default function AdminLoginPage(){
  const [credentials,setCredentials] = useState({userid:"", password:""})
  let navigate = useNavigate();   
  
  const handleSubmit= async(e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/user/login", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({userid:credentials.userid,password:credentials.password}) 
      });
      const json= await response.json();       // in this case which is auth token 
      console.log(json);
      if(json.success){
        // Save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        navigate("/");        //this is redirecting me to the home page after I login
        console.log("Logged In SUCCESSFULLY","success")
      }
      else{
        console.log("Invalid Credentials","danger");
      }
  }

  const onChange= (e) =>{                                                    //this is fucntion is one of its kind
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
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
  <input type="userid" className="form-control" value={credentials.userid} onChange={onChange} id="userid" name="userid" aria-describedby="useridHelp"/>
  </div>
  <div className="abcd">
<label for="password" id="pass">Password(required)</label>
<input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name ="password" />
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
    </form>
    </>

  )
}
