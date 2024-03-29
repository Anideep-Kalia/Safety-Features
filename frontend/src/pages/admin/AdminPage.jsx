import react from 'react'
import AdminNavbar from "../../components/admin/AdminNavbar"
import AdminSidebar from "../../components/admin/AdminSidebar"
import AdminTable from '../../components/admin/AdminTable'

const Admin=()=>{
    return <div className='flex'>
        <div className='flex-initial w-56'>
            <AdminSidebar/>
        </div>
     <div className='flex-auto'>
            <AdminNavbar/>
            <AdminTable/>
        </div>
    
    </div>
}

export default Admin