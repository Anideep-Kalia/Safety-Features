import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Admin from "./pages/Admin";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
