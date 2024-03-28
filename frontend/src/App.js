import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Map from "./user-side/Map"
import Trial from "./user-side/Trial"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/map' element={<Map />} />
        <Route path='/trial' element={<Trial />} />
      </Routes>
    </>
  );
}

export default App;
