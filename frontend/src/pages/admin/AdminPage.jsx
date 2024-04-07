import react from 'react'
import AdminNavbar from "../../components/admin/AdminNavbar"
import AdminSidebar from "../../components/admin/AdminSidebar"
import AdminTable from '../../components/admin/AdminTable'
import AddNewLocationBar from "../../components/admin/AddNewLocationBar"
const Admin=()=>{
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