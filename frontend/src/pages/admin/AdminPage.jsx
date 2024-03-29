import react from 'react'
import AdminNavbar from "../../components/admin/AdminNavbar"
import AdminSidebar from "../../components/admin/AdminSidebar"

const Admin=()=>{
    return <div className='flex'>
        <div className='flex-initial w-56'>
            <AdminSidebar/>
        </div>
     <div className='flex-auto'>
            <AdminNavbar/>
        </div>
    
    </div>
}

export default Admin