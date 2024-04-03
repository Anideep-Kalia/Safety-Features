import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Admin from "./pages/admin/AdminPage"
import "./App.css"
import Map from "./user-side/Map"
import Trial from "./user-side/Trial"
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import Stage1 from "./components/admin/AddNewLocationPopup/StageOne";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/map' element={<Map />} />
        <Route path='/trial' element={<Trial />} />
        <Route path='/admin/login' element={<AdminLoginPage />} />
        <Route path='/abcd' element={<Stage1 />} />
      </Routes>
    </>
  );
}

export default App;
