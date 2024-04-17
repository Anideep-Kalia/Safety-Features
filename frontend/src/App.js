import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Admin from "./pages/admin/AdminPage"
import "./App.css"
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import FrontPage from "./user-side/Frontpage";
import PageState from './context/pages/PageState';
import Tri from './user-side/all pages/User'
import Stage1 from "./components/admin/AddNewLocationPopup/StageOne";

function App() {
  return (
    <>
    <PageState>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/front' element={<FrontPage/>}/>
        <Route path='/admin/login' element={<AdminLoginPage />} />
        <Route path='/tri' element={<Tri />} />
        <Route path='/abcd' element={<Stage1 />} />
      </Routes>
      </PageState>
    </>
  );
}

export default App;
