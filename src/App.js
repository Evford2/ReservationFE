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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}/>
        <Route path="/admin" element={<AdminLayout/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
