import react from 'react'
import AdminNavbar from "../../components/admin/AdminNavbar"
import AdminSidebar from "../../components/admin/AdminSidebar"
import AdminTable from '../../components/admin/AdminTable'
<<<<<<< HEAD
import AddNewLocationBar from "../../components/admin/AddNewLocationBar"
=======
import AddNewLocationBar from '../../components/admin/AddNewLocationBar'

>>>>>>> 75ed98670869091004a7cc7b88e97bcf08d24ea4
const Admin=()=>{
    return <div className='flex'>
        <div className='flex-initial w-56'>
            <AdminSidebar/>
        </div>
     <div className='flex-auto'>
            <AdminNavbar/>
<<<<<<< HEAD
            <AddNewLocationBar />
=======
            <AddNewLocationBar/>
>>>>>>> 75ed98670869091004a7cc7b88e97bcf08d24ea4
            <AdminTable/>
        </div>
    
    </div>
}

export default Admin