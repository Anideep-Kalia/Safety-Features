import react from 'react'
import AdminNavbar from "../../components/admin/AdminNavbar"
import AdminSidebar from "../../components/admin/AdminSidebar"
import AdminTable from '../../components/admin/AdminTable'
import AddNewLocationBar from "../../components/admin/AddNewLocationBar";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Admin=()=>{
 const navigate = useNavigate();

    useEffect(  ()=>{

        if(!localStorage.getItem('token')){
            navigate("/admin/login")
          } 

      },[localStorage.getItem('token')]);

    return <div className='flex'>
        <div className='flex-initial w-56'>
            <AdminSidebar/>
        </div>
     <div className='flex-auto'>
            <AdminNavbar/>
            <AddNewLocationBar />
            <AdminTable/>
        </div>
    
    </div>
}

export default Admin