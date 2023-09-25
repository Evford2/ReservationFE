import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeLayout from "./pages/home/HomeLayout"

import './style/Layout.scss'
import './style/home.scss'
import './style/index.scss'
import AdminLayout from "./pages/admin/AdminLayout";
import LocationsLayout from "./pages/locations/LocationsLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}/>
        <Route path="/admin" element={<AdminLayout/>}/>
        <Route path="/locations" element={<LocationsLayout/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
